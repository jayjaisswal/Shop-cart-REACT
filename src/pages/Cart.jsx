import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side - Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Right Side - Summary */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-fit md:sticky md:top-20">
            <h2 className="text-xl font-bold text-green-800">Your Cart</h2>
            <h3 className="text-3xl font-semibold text-green-600">SUMMARY</h3>
            <p className="text-lg mt-2">Total Items: <span className="font-medium">{cart.length}</span></p>
            <p className="text-xl font-semibold mt-2">Total Amount: <span className="text-green-600">${totalAmount.toFixed(2)}</span></p>

            <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg w-full hover:bg-green-600 transition">
              Check Out Now
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold text-gray-700">Cart is empty</h2>
          <Link to="/">
            <button className=" cursor-pointer mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
