import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { container, row, col } from "bootstrap";
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

const urlEndpoint = "http://localhost:4000";

function App() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const { login, logout, register, token, userId } = useAuth();

	useEffect(() => {
		if (token) {
			fetch(`${urlEndpoint}/users/${userId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					setUser(data);
					setLoading(false);
				});
		} else {
			setLoading(false);
		}
	}, [token, userId]);

	return (
		<div className="App-header">
			<NavBar user={user} logout={logout} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register register={register} />} />
				<Route path="/login" element={<Login login={login} />} />
			</Routes>
		</div>
	);
}

export default App;
