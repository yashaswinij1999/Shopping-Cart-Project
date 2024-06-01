import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { shopContext } from "../Hooks/ShoppingContext";

function Navbar() {
  const { state } = useContext(shopContext);

  return (
    <>
      <div className="w-full flex justify-between bg-slate-500 text-white p-4 text-xl sticky top-0">
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>Uttara</div>
        <div className="flex gap-2 mr-4">
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/cart"}>
            <div className="p-1 flex relative">
              <FaShoppingCart />
              <div className="bg-red-500 w-4 h-4 rounded-full absolute bottom-3 left-4 text-sm flex justify-center items-center">
                {state.length}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
