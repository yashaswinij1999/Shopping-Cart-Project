import { useContext } from "react";
import { shopContext } from "../Hooks/ShoppingContext";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TotalPrize from "./TotalPrize";

export default function CartItem() {
  const { state, dispatch } = useContext(shopContext);
  const navigate = useNavigate();

  function increment(id) {
    dispatch({ type: "increment", payload: { id: id } });
  }

  function decrement(id) {
    console.log(id);
    dispatch({ type: "decrement", payload: { id: id } });
  }

  return (
    <>
      <div className="max-h-screen">
        {state.map((el) => (
          <div
            className=" flex justify-between items-center m-2  h-36 shadow-xl text-center"
            key={el.id}
          >
            <div className="w-1/3 flex items-center justify-center ">
              <img className="w-28 h-32" src={el.image} />
            </div>
            <div className="w-1/2 h-18 p-2">
              <p className="truncate font-bold">{el.title}</p>
              <p className="font-semibold">${el.price}</p>
            </div>
            <div className="w-1/3 h-32 flex items-center justify-center">
              <div className="p-2">
                <FaPlus onClick={() => increment(el.id)} />
              </div>
              <div className="p-2">{el.quantity}</div>
              <div className="p-2">
                <FaMinus onClick={() => decrement(el.id)} />
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-end p-6 m-4">
          <TotalPrize />
        </div>
        <div className="flex m-4 justify-center gap-2">
          <button
            className="p-2  bg-slate-600 text-white rounded-lg"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
          <button
            className="p-2 bg-slate-600 text-white rounded-lg"
            onClick={() => navigate("/checkout")}
          >
            {" "}
            Check Out
          </button>
        </div>
      </div>
    </>
  );
}
