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
import ContentProvider, {useContent} from "./Hooks/Content"
;

//i need to develop a way to access the information for the individual product pages
function App() {
		return (
		<div className="App-header">
			<AuthProvider>
				<ContentProvider>
					<NavBar />
						<Routes>
							<Route path="/" element={<Home />}/>
							<Route path="/register" element={<Register />} />
							<Route path="/login" element={<Login />} />
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
				</ContentProvider>
			</AuthProvider>
		</div>
	);
}

export default App;
