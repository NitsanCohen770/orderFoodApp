import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import MealItemForm from '../MealItem/MealItemForm/MealItemForm';
import classes from './MealItem.module.css';

const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);
  const priceWithDecimal = `$${price.toFixed(2)}`;
  const addToCartHandler = amount => {
    cartCtx.addItem({ id, name, amount, price });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
      </div>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>{priceWithDecimal}</div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
