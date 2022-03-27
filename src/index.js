import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from 'react-router-dom'
import {FilterProvider} from './filter-context/filter-context'
import {CartProvider} from './filter-context/cart-context'
import {AuthProvider} from './filter-context/auth-context'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <CartProvider>
    <FilterProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FilterProvider>
    </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
