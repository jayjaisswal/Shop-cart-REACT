import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="flex flex-col md:flex-row border-b-2 mt-5 items-center p-4 rounded-lg shadow-md">
      {/* Image - Now Fully Responsive */}
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-24 h-24 object-contain rounded-lg md:w-32 md:h-32"

      />

      {/* Item Details */}
      <div className="flex-1 ml-4 text-center md:text-left">
        <h1 className="text-gray-700 font-semibold text-lg truncate w-40 mt-1">
          {item.title}
        </h1>
        <p className="text-gray-500 text-sm truncate w-60">
          {item.description}
        </p>
        <p className="text-green-700 font-bold text-lg mt-1">
          ${item.price.toFixed(2)}
        </p>
      </div>

      {/* Delete Button - Now Styled */}
      <button 
        onClick={removeFromCart} 
        className="text-red-500 cursor-pointer hover:text-red-700 p-2 rounded-full bg-red-100 hover:bg-red-200 transition"
      >
        <FcDeleteDatabase size={24} />
      </button>
    </div>
  );
}

export default CartItem;
