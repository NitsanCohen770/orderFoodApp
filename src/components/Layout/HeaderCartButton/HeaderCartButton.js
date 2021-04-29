import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import CartIcon from '../../Cart/CartIcon/CartIcon';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = ({ onClickedCartButton }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <button onClick={onClickedCartButton} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
