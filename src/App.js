import React, { useState } from "react";

import { CartProvider } from "./contexts/cart-context";

import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";

const App = () => {
  const [showCart, setShowCard] = useState(false);

  const showCartHandler = () => {
    setShowCard(true);
  };

  const hideCartHandler = () => {
    setShowCard(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header onCartButtonClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
