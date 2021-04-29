import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';
import Modal from '../../components/UI/Modal/Modal';
import CartItem from './CartItem/CartItem';

const Cart = ({ onHideCart }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemsRemoveHandler = item => {
    cartCtx.addItem(item);
  };
  const cartItemsAddHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemsRemoveHandler.bind(null, item.id)}
          onAdd={cartItemsAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClickedBackdrop={onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onHideCart} className={classes['button--alt']}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
