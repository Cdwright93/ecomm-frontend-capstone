import "../App.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContent } from "../Hooks/Content";
import { useAuth } from "../Hooks/Auth";

//at this point all i need to do is send a post request to the backend with the product id and the user id

const Checkout = (props) => {
	const { user } = useAuth();
	const { createCheckout } = useContent();
	
	createCheckout().then((data) => {
		window.location.href = data.url;
	});
};

export default Checkout;
