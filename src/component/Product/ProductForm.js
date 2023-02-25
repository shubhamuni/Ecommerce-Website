import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Input from "../UI/Input";

const ProductForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return setAmountIsValid(false);
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className="m-3">
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <div>
        <Button onClick={submitHandler} variant="dark">
          Add to Cart
        </Button>
      </div>
      {!amountIsValid && <p>Please Enter Valid Amount</p>}
    </form>
  );
};

export default ProductForm;
