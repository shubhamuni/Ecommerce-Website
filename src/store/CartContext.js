import React from "react";

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (id) => {},

  //'added after created login page'

  token: "",
  isLoggedIn: "false",
  login: (token) => {},
  logout: () => {},
});

export default CartContext;
