import { BsCartFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const cart = useSelector((state) => state.cart);
  return (
    <nav className="flex  justify-between items-center h-20 max-w-6xl mx-auto ">
      <NavLink to="/">
        <div className="ml-5">
          <img 
            src="../src/assets/shopinglogo.png "
            alt=""
            width={90}
            
          />
        </div>
      </NavLink>
      <div className="flex items-center font-medium mr-5 space-x-6 text-slate-100">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink className="relative" to="/cart">
          <BsCartFill className="text-2xl" />
          {
            cart.length > 0 && <span className="absolute -top-1 -right-2
             bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
          }
        </NavLink>
      </div>
    </nav>
  );
}
export default Navbar;
