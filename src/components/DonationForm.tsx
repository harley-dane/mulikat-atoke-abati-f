// client/src/components/DonationForm.tsx
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const DonationForm: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  const projectId = new URLSearchParams(location.search).get("project");
  const isSuccess = new URLSearchParams(location.search).get("success");
  const isCanceled = new URLSearchParams(location.search).get("canceled");

  useEffect(() => {
    if (isSuccess) setSuccess(true);
    if (isCanceled) setError("Donation was canceled");
  }, [isSuccess, isCanceled]);

  useEffect(() => {
    if (import.meta.env.VITE_PAYPAL_CLIENT_ID) {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=${
        import.meta.env.VITE_PAYPAL_CLIENT_ID
      }`;
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        (window as any).paypal
          .Buttons({
            createOrder: (_data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: { value: amount.toString(), currency_code: "USD" },
                    description: projectId
                      ? `Donation for Project ${projectId}`
                      : "General Donation",
                  },
                ],
              });
            },
            onApprove: async (_data: any, actions: any) => {
              await actions.order.capture();
              setSuccess(true);
            },
            onError: (err: any) => {
              setError("PayPal payment failed: " + err.message);
            },
          })
          .render("#paypal-button-container");
      };
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [amount, projectId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (amount <= 0) {
      setError("Please enter an amount greater than 0");
      return;
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/donations/create-checkout-session`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount, projectId }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Failed to create checkout session"
        );
      }
      const session = await response.json();
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe failed to initialize");
      }
      const result = await stripe.redirectToCheckout({ sessionId: session.id });
      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (err: any) {
      setError(err.message);
      console.error("Checkout error:", err.message);
    }
  };

  return (
    <section className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
        Make a Donation
      </h2>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      {success && (
        <p className="text-green-600 text-center mb-4">
          Donation completed successfully!
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium mb-1">
            Donation Amount ($)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full p-2 border rounded"
            placeholder="Enter amount"
            min="1"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
        >
          Donate with Card
        </button>
        <div className="mt-4 text-center">
          <p>Other ways to give:</p>
          <button className="text-blue-600 hover:underline">
            Donate with Cryptocurrency
          </button>
          <div id="paypal-button-container" className="mt-2"></div>
        </div>
      </form>
    </section>
  );
};

export default DonationForm;
