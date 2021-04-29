import React, { Fragment } from 'react';
import mealsImage from '../../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';
const Header = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Order Food App</h1>
        <HeaderCartButton onClickedCartButton={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="a table full of delicious food"></img>
      </div>
    </Fragment>
  );
};

export default Header;
