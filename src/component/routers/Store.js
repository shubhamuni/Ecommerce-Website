import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Product from "../Product/product";
import classes from "./../Layout/Header.module.css";

const Store = () => {
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
};

export default Store;
