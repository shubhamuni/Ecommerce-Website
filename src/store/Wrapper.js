import axios from "axios";
import { useReducer, useState } from "react";
import CartContext from "./CartContext";

//Initial Cart State

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  // For adding items to cart

  if (action.type === "ADD") {
    const updatedTotalPrice =
      state.totalPrice + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    //item which is already present in cart

    let updatedItems;

    // If the item is already exist then update the amount

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;

      //Adding the item to cart which is not exist already
    } else {
      updatedItems = state.items.concat(action.item);
    }
    // updating the state
    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }
  //For removing items from cart

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];

    // updating the price of item

    const updatedTotalPrice = state.totalPrice - existingItem.price;
    let updatedItems;

    // if the amount of item is 1 then remove item from cart

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }

  return defaultCartState;
};

const Wrapper = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    const email = localStorage.getItem("email");
    axios.post(
      `https://crudcrud.com/api/acb7fe59bf2941cea6221757165eca49/cart/${email}`,
      {
        title: item.title,
        amount: item.amount,
        price: item.price,
      }
    );
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const localtoken = localStorage.getItem("token");
  const [token, setToken] = useState(localtoken);
  const userLoggedIn = Boolean(token);

  const loginHandler = (token) => {
    setTimeout(logoutHandler, 15 * 60 * 1000); //For Auto logout functionality
    setToken(token); // for storing token into context
    localStorage.setItem("token", token);
  };
  const logoutHandler = () => {
    localStorage.removeItem("token"); //For removing the token from localstorage
    setToken(null); // Token is removing from context
  };

  const context = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    token: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Wrapper;
