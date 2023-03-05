import { Fragment, useContext, useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import CartContext from "./store/CartContext";

const Layout = (props) => {
  const authCtx = useContext(CartContext);
  const login = authCtx.isLoggedIn;
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
