import React, { useContext, useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { AuthContext } from "../../Context/AuthProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";


const stripePromise = loadStripe(process.env.REACT_APP_publishable_key);

function Checkout() {
  const { cartTotal } = useCart();
  const {user} = useContext(AuthContext)

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="border rounded bg-white p-8">
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="form-input w-full mb-4 border"
                  id="name"
                  type="text"
                  value={user?.displayName}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-input w-full mb-4 border"
                  id="email"
                  type="email"
                  value={user?.email}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="card-number"
                >
                  Card Number
                </label>
                <input
                  className="form-input w-full mb-4 border"
                  id="card-number"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="expiry-date"
                >
                  Expiry Date
                </label>
                <input
                  className="form-input w-full mb-4 border"
                  id="expiry-date"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="csv"
                >
                  CSV
                </label>
                <input
                  className="form-input w-full mb-4 border"
                  id="csv"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <input
                  className="form-checkbox"
                  id="save-card"
                  type="checkbox"
                />
                <label className="text-gray-700 ml-2" htmlFor="save-card">
                  Save card for future purchases
                </label>
              </div>
             
            </form>
          </div>
          <div className="border rounded bg-white p-8">
            <h2 className="text-gray-700 font-bold mb-2">Order Summary</h2>
            <hr className="my-2" />
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${cartTotal}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>$0</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$0</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span className="text-right">
                ${cartTotal}</span>
            </div>
           <div className="mt-10">
           {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutFrom/>
        </Elements>
      )}
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
