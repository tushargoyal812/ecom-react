import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from 'react-router-dom'
import {FilterProvider} from './filter-context/filter-context'
import {CartProvider} from './filter-context/cart-context'
import {AuthProvider} from './filter-context/auth-context'
import {WishlistProvider} from './filter-context/wishlist-context'
import {CategoryProvider} from './filter-context/category-context'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CategoryProvider>
    <WishlistProvider>
    <AuthProvider>
    <CartProvider>
    <FilterProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FilterProvider>
    </CartProvider>
    </AuthProvider>
    </WishlistProvider>
    </CategoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
