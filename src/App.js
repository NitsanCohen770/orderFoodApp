import { Fragment, useState } from 'react';
import CartProvider from './store/CartProvider';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
function App() {
  const [cartIsShown, setcartIsShown] = useState(false);
  const showCartHandler = () => {
    setcartIsShown(!cartIsShown);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={showCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
