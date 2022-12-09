import "../App.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContent } from "../Hooks/Content";
import { useAuth } from "../Hooks/Auth";

const Payment = (props) => (
	<div>
		<h3>Payment</h3>
		<p className="page-p">
			Welcome to the order page. This is a protected route. You must be logged
			in
		</p>
	</div>
);

export default Payment;
