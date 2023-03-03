import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import ProductData from "./ProductData";
import classes from "./../Layout/Header.module.css";
import { Container } from "react-bootstrap";

const ProductDetails = (props) => {
  const params = useParams();
  console.log(params.productId);
  return (
    <Fragment>
      <div className={classes.headline}>
        <Container className="p-1">The Generics</Container>
      </div>
      <p>{params.productId}</p>
      <main>
        <Route path={`/store/${params.productId}/product`}>
          <ProductData />
        </Route>
      </main>
    </Fragment>
  );
};

export default ProductDetails;
