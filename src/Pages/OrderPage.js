import "../App.css";
import { useState, useRef } from "react";
import AuthProvider from "../Hooks/Auth.js";

const Order = (props) => (
	<div>
		<h3>Order Page</h3>
		<p className="page-p">
			Welcome to the order page. This is a protected route. You must be logged
			in
		</p>
	</div>
);

export default Order;
