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
            {!authCtx.isLoggedIn && <AuthForm />}
            {authCtx.isLoggedIn && <Redirect to="/" />}
          </Route>
          <Route exact path="/Store">
            {authCtx.isLoggedIn && <Store />}
            {!authCtx.isLoggedIn && <AuthForm />}
          </Route>
          <Route path="/Store/:productId">
            {authCtx.isLoggedIn && <ProductData />}
            {!authCtx.isLoggedIn && <AuthForm />}
          </Route>
          <Route path="/Home">
            {authCtx.isLoggedIn && <Home />}
            {!authCtx.isLoggedIn && <AuthForm />}
          </Route>
          <Route path="/About">
            {authCtx.isLoggedIn && <About />}
            {!authCtx.isLoggedIn && <AuthForm />}
          </Route>
          <Route path="/Contact">
            {authCtx.isLoggedIn && <ContactUs />}
            {!authCtx.isLoggedIn && <AuthForm />}
          </Route>
        </Switch>
      </main>
    </Layout>
  );
};

export default Routing;
