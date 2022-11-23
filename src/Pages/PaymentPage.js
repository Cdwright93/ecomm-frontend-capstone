import "../App.css";
import { useState, useRef } from "react";
import AuthProvider from "../Hooks/Auth.js";

const Payment = (props) => (
	<div>
		<h3>Payment</h3>
		<p>
			Welcome to the order page. This is a protected route. You must be logged
			in
		</p>
	</div>
);

export default Payment;
