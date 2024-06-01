import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      const existingItem = state.find((el) =>
        el.id === action.payload.id ? true : false
      );
      if (existingItem) {
        return state.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        );
      } else {
        return [
          ...state,
          {
            id: action.payload.id,
            image: action.payload.image,
            title: action.payload.title,
            price: action.payload.price,
            quantity: 1,
          },
        ];
      }

    case "increment":
      return state.map((el) =>
        el.id === action.payload.id ? { ...el, quantity: el.quantity + 1 } : el
      );

    case "decrement":
      return state
        .map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity - 1 }
            : el
        )
        .filter((el) => el.quantity > 0);

    default:
      return state;
  }
};

export const shopContext = createContext();

export default function ShoppingContext({ children }) {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <shopContext.Provider value={{ state, dispatch }}>
        {children}
      </shopContext.Provider>
    </>
  );
}
