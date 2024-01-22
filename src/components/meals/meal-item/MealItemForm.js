import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../ui/input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = Number(amountInputRef.current.value);

    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };

  return (
    <>
      <form onSubmit={submitHandler} className={classes.form}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: 1,
          }}
        />
        <button>+Add</button>
        {!amountIsValid && <p>Please enter a valid amount</p>}
      </form>
    </>
  );
};

export default MealItemForm;
