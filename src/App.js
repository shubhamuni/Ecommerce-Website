import { Fragment, useState } from "react";
import Header from "./component/Layout/Header";
import Product from "./component/Product/product";
import Cart from "./component/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <main>
        <Product />
      </main>
    </Fragment>
  );
}

export default App;
