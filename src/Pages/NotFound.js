import "../App.css";
import { useState, useRef } from "react";
import AuthProvider from "../Hooks/Auth.js";

const NotFound = (props) => (
	<div>
		<h3>Page Not Not Found</h3>
		<p className="page-p">The page you are looking for does not exist.</p>
	</div>
);

export default NotFound;
