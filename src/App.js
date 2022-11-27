import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useAuth } from "./Hooks/Auth";
import { useRef, useState, useEffect } from "react";
import Home from "./Pages/HomePage.js";
import Products from "./Pages/ProductsPage.js";
import Product from "./Pages/ProductPage.js";
import Cart from "./Pages/CartPage.js";
import Checkout from "./Pages/CheckoutPage.js";
import Login from "./Pages/LoginPage.js";
import Register from "./Pages/RegisterPage.js";
import Profile from "./Pages/ProfilePage.js";
import Shipping from "./Pages/ShippingPage.js";
import Payment from "./Pages/PaymentPage.js";
import Order from "./Pages/OrderPage.js";
import NotFound from "./Pages/NotFound";
import NavBar from "./Components/NavBar";

;

function App() {
	  const { user, login, logout, register, verifyAdmin } = useAuth();



		return (
		<div className="App-header">
			<NavBar user={user} logout={logout} verifyAdmin={verifyAdmin} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register register={register} />} />
				<Route path="/login" element={<Login login={login} />} />
				<Route path="/profile" element={<Profile user={user} />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/:id" element={<Product />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/shipping" element={<Shipping />} />
				<Route path="/payment" element={<Payment />} />
				<Route path="/order" element={<Order />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
