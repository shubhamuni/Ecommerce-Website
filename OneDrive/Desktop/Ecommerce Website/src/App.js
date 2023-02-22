import { Fragment, useState } from "react";
import Header from "./component/Layout/Header";
import Product from "./component/Product/product";
import Cart from "./component/Cart/Cart";

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
      <Product />
    </Fragment>
  );
}

export default App;
