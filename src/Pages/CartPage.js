import "../App.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContent } from "../Hooks/Content";
import { useAuth } from "../Hooks/Auth";

const Cart = (props) => (
	<div className="pageheader">
		<h1 classname="page-h1">Cart Page</h1>
		<p className="page-p">
			Welcome to the cart page. This is a protected route. You must be logged in
		</p>
	</div>
);

export default Cart;
