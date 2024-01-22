import { useContext, createContext, useReducer } from "react";

const CartContext = createContext({});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  const { items, totalAmount } = state;

  if (action.type === "ADD") {
    const updatedTotalAmount =
      totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = items[existingCartItemIndex];

    const updatedItems = items.concat(action.item);
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "REMOVE") {
  }
  return defaultCartState;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItemHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItemHandler,
    removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  return context;
}

export default CartContext;
