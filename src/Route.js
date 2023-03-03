import { Redirect, Route, Switch } from "react-router-dom";
import ProductData from "./component/Pages/ProductData";
import About from "./component/routers/About";
import ContactUs from "./component/routers/ContactUs";
import Home from "./component/routers/Home";
import Store from "./component/routers/Store";
import Layout from "./Layout";

const Routing = (props) => {
  return (
    <Layout>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Store" />
          </Route>
          <Route exact path="/Store">
            <Store />
          </Route>
          <Route path="/Store/:productId">
            <ProductData />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <ContactUs />
          </Route>
        </Switch>
      </main>
    </Layout>
  );
};

export default Routing;
