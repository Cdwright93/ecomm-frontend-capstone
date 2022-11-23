import "../App.css";
import { useState, useRef } from "react";
import AuthProvider from "../Hooks/Auth.js";

const Checkout = (props) => (
	<div>
		<h3>Checkout</h3>
		<p>
			Welcome to the chekcout page. This is a protected route. You must be
			logged in
		</p>
	</div>
);

export default Checkout;
