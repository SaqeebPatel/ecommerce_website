import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import "./App.css";
import "./components/Theme.css";
import "react-toastify/dist/ReactToastify.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Modalitem from "./components/Modalitem";

function App() {
  const [cart, setCart] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const handleregister = (username) => {
    setUsername(username);
    localStorage.setItem("username", username);
  };

  const addToCart = (product) => {
    setCart((cart) => [...cart, product]);
  };

  const handleRemove = (id) => {
    setCart((cart) => cart.find((prodId) => prodId !== id));
  };

  const Products = [
    {
      prodId: 1,
      prodName: "iphone11",
      proddes:
        "Sleek design, dual cameras, fast performance, long battery life",
      color: "White",
      price: 30000,
      image:
      "https://images.unsplash.com/photo-1592821266573-4c773cfc5507?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      prodId: 2,
      prodName: "iphone12",
      proddes: "A14 Bionic chip, improved cameras, 5G support, Ceramic .",
      color: "Purple",
      price: 40000,
      image: "https://images.unsplash.com/photo-1600262606369-acb8a2cf69fb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      prodId: 3,
      prodName: "iphone13",
      proddes: "Advanced cameras, A15 Bionic chip, 5G, longer battery life.",
      color: "Green",
      price: 450000,
      image:
        "https://images.unsplash.com/photo-1596896639823-da416a9d3960?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      prodId: 4,
      prodName: "iphone14",
      proddes: "Advanced cameras, A15 Bionic chip, 5G, longer battery life.",
      color: "blue",
      price: 50000,
      image:
        "https://images.unsplash.com/photo-1555375771-14b2a63968a9?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      prodId: 5,
      prodName: "iphone15",
      proddes: "Advanced cameras, A15 Bionic chip, 5G, longer battery life.",
      color: "Pink",
      price: 55000,
      image:
      "https://images.unsplash.com/photo-1596896639823-da416a9d3960?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      prodId: 6,
      prodName: "iphone15 pro",
      proddes: "Advanced cameras, A15 Bionic chip, 5G, longer battery life.",
      color: "Black",
      price: 60000,
      image:
      "https://images.unsplash.com/photo-1592821266573-4c773cfc5507?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <Navbar count={cart} cart={cart} username={username} />
      
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route
          path="/register"
          element={<Register onRegister={handleregister} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={<Cart data={Products} addToCart={addToCart} />}
        />
        <Route
          path="/cart/:prodId/*"
          element={<ProductDetails data={Products} addToCart={addToCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
