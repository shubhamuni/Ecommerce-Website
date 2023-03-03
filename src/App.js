import Product from "./component/Product/product";
import Cart from "./component/Cart/Cart";
import { Fragment } from "react";
import { Container } from "react-bootstrap";
import classes from "./component/Layout/Header.module.css";

function App() {
  return (
    <Fragment>
      <div className={classes.headline}>
        <Container className="p-1">The Generics</Container>
      </div>
      <main>
        <Product />
      </main>
    </Fragment>
  );
}

export default App;
