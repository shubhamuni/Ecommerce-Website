import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const islogin = cartCtx.isLoggedIn;

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <div className="ms-4">
      <Button
        onClick={props.onShow}
        className="justify-content-end"
        variant="secondary"
        style={{ width: "10rem", height: "2.5rem" }}
      >
        <span>Cart </span>
        <span> Items {numberOfCartItems}</span>
      </Button>
      {islogin && (
        <Button variant="dark" onClick={cartCtx.logout}>
          Logout
        </Button>
      )}
    </div>
  );
};

export default HeaderCartButton;
