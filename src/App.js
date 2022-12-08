import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AuthProvider, { useAuth } from "./Hooks/Auth";
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
	//writing a hook that gets the products from the server
	//this is a subscription ecommerce site so the products will be updated frequently
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);
	const [cartCount, setCartCount] = useState(0);
	const [cartItems, setCartItems] = useState([]);
	const [cartItemsCount, setCartItemsCount] = useState(0);
	const [cartItemsTotal, setCartItemsTotal] = useState(0);
	
		return (
		<div className="App-header">
			<AuthProvider>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login/>} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/:id" element={<Product />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/shipping" element={<Shipping />} />
				<Route path="/payment" element={<Payment />} />
				<Route path="/order" element={<Order />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
