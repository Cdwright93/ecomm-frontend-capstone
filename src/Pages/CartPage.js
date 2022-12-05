import "../App.css";
import { useState, useRef } from "react";
import AuthProvider from "../Hooks/Auth.js";

const Cart = (props) => (
	<div>
		<h3>Cart Page</h3>
		<p className="page-p">
			Welcome to the cart page. This is a protected route. You must be logged in
		</p>
	</div>
);

export default Cart;
