import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <Button
      onClick={props.onShow}
      className="justify-content-end"
      variant="secondary"
      style={{ width: "10rem", height: "2.5rem" }}
    >
      <span>Cart </span>
      <span>({numberOfCartItems}items )</span>
    </Button>
  );
};

export default HeaderCartButton;
