import { Fragment, useState } from "react";
import Header from "./component/Layout/Header";
import Product from "./component/Product/product";
import Cart from "./component/Cart/Cart";
import Wrapper from "./store/Wrapper";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Wrapper>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <main>
        <Product />
      </main>
    </Wrapper>
  );
}

export default App;
