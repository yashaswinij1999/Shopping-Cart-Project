import React from "react";
import { useContext } from "react";
import { shopContext } from "../Hooks/ShoppingContext";
import CartItem from "./CartItem";

export default function Cart() {
  const { state } = useContext(shopContext);
  return (
    <>
      {state.length === 0 ? (
        <p className="m-auto max-h-screen w-fit p-2 text-red-500 text-lg font-medium">
          Your cart is empty
        </p>
      ) : (
        <div className="w-1/2  m-auto max-h-screen p-2 flex flex-col">
          <p className="text-2xl text-center ">Your Cart Items</p>
          <div className="m-4 max-h-screen ">
            <CartItem />
          </div>
        </div>
      )}
    </>
  );
}
