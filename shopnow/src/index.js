import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./Pages/cart/context/CartContext";
import AuthContextProvider from "./Context/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    
    <BrowserRouter>
    <AuthContextProvider>
      <ChakraProvider>
        <CartContextProvider>
        <App />
        </CartContextProvider>
        
      </ChakraProvider>
      </AuthContextProvider>
    </BrowserRouter>
    
);
