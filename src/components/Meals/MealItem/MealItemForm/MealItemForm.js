import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../../UI/Input/Input';
const MealItemForm = ({ onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const eneteredAmount = amountInputRef.current.value;
    const enteredAmountConvertedToNumber = +eneteredAmount;
    if (
      eneteredAmount.trim().length === 0 ||
      enteredAmountConvertedToNumber < 1 ||
      enteredAmountConvertedToNumber > 5 ||
      enteredAmountConvertedToNumber === isNaN
    ) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(enteredAmountConvertedToNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
