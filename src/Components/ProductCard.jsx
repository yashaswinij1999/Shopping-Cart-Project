import { useContext } from "react";
import { shopContext } from "../Hooks/ShoppingContext";

export default function ProductCard({ id, products }) {
  const { dispatch } = useContext(shopContext);

  function addToCart(id, image, title, price) {
    dispatch({
      type: "Add",
      payload: { id: id, image: image, title: title, price: price },
    });
  }

  return (
    <>
      <div className="shadow-lg gap-4 p-4 m-4 hover:scale-90 h-96 ">
        <div className="flex flex-col justify-center items-center">
          <div className=" w-80 h-44 p-2">
            <img className="w-36 h-40 m-auto" src={products.image} />
          </div>
          <div className="w-80 h-40  m-2 p-2 text-center">
            <p className="truncate font-medium">{products.title}</p>
            <p className="m-1 font-medium">${products.price}</p>
            <button
              className="bg-slate-700 text-white p-2 rounded-md m-2"
              onClick={() =>
                addToCart(
                  products.id,
                  products.image,
                  products.title,
                  products.price
                )
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
