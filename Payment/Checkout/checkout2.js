import React from 'react';

const OrderDetails = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-2xl w-full">
        <h3 className="text-xl font-medium mb-4">Order details</h3>

        <ul className="border border-gray-300 divide-y divide-gray-300">
          <li className="py-4 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/checkout/1/product-1.png"
                alt=""
                className="h-16 w-16 object-cover rounded-lg mr-4"
              />
              <div>
                <p className="font-medium">Apple Watch Series 7</p>
                <p className="text-gray-500">Golden</p>
              </div>
            </div>
            <p className="font-medium">$359</p>
          </li>

          <li className="py-4 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/checkout/1/product-2.png"
                alt=""
                className="h-16 w-16 object-cover rounded-lg mr-4"
              />
              <div>
                <p className="font-medium">Beylob 90 Speaker</p>
                <p className="text-gray-500">Space Gray</p>
              </div>
            </div>
            <p className="font-medium">$49</p>
          </li>
        </ul>

        <hr className="my-6 border-gray-300"/>

        <div className="border border-gray-300 p-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span className="font-medium">$589</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Tax</span>
            <span className="font-medium">$0</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span className="font-medium">$10</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Total</span>
            <span className="font-medium">$599</span>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Confirm payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
