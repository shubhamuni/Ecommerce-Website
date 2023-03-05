import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthForm from "./Authentication page/AuthForm";
import WelcomePage from "./Authentication page/WelcomePage";
import ProductData from "./component/Pages/ProductData";
import About from "./component/routers/About";
import ContactUs from "./component/routers/ContactUs";
import Home from "./component/routers/Home";
import Store from "./component/routers/Store";
import Layout from "./Layout";
import CartContext from "./store/CartContext";

const Routing = (props) => {
  const authCtx = useContext(CartContext);
  return (
    <Layout>
      <main>
        <Switch>
          <Route path="/" exact>
            {!authCtx.isLoggedIn && <WelcomePage />}
            {authCtx.isLoggedIn && <Store />}
          </Route>
          <Route path="/authform">
            <AuthForm />
          </Route>
          <Route exact path="/Store">
            {authCtx.isLoggedIn && <Store />}
            <Redirect to="/authform" />
          </Route>
          <Route path="/Store/:productId">
            {authCtx.isLoggedIn && <ProductData />}
            <Redirect to="/authform" />
          </Route>
          <Route path="/Home">
            {authCtx.isLoggedIn && <Home />}
            <Redirect to="/authform" />
          </Route>
          <Route path="/About">
            {authCtx.isLoggedIn && <About />}
            <Redirect to="/authform" />
          </Route>
          <Route path="/Contact">
            {authCtx.isLoggedIn && <ContactUs />}
            <Redirect to="/authform" />
          </Route>
        </Switch>
      </main>
    </Layout>
  );
};

export default Routing;
