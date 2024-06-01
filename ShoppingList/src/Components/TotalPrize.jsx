import { useContext } from "react";
import { shopContext } from "../Hooks/ShoppingContext";

export default function TotalPrize() {
  const { state } = useContext(shopContext);

  function getTotal() {
    return state.reduce((total, el) => total + el.quantity * el.price, 0);
  }

  return (
    <>
      <div className="font-semibold text-xl text-green-400">
        Total Price : ${getTotal()}
      </div>
    </>
  );
}
