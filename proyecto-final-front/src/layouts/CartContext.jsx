import { createContext, useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export function CartProvider({ children }) {
  const initialState = {
    cartItems: [],
  };

  const savedCart = JSON.parse(localStorage.getItem('cart')) || initialState;

  const [state, dispatch] = useReducer(cartReducer, savedCart);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe utilizarse dentro de un CartProvider');
  }
  return context;
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
      case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id),
      };
    default:
      return state;
  }
}


export default CartProvider;

CartProvider.propTypes = {
    children: PropTypes.node
  };


  