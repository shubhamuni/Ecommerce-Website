import { Fragment, useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";

const Layout = (props) => {
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
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
