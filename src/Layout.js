import { useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import Wrapper from "./store/Wrapper";

const Layout = (props) => {
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
      <main>{props.children}</main>
    </Wrapper>
  );
};

export default Layout;
