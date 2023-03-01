import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import About from "./component/routers/About";
import ContactUs from "./component/routers/ContactUs";
import Home from "./component/routers/Home";
import Store from "./component/routers/Store";
import Wrapper from "./store/Wrapper";

const Routing = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Wrapper>
      <BrowserRouter>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShow={showCartHandler} />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
};

export default Routing;
