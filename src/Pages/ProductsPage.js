import "../App.css";
import { useState, useRef } from "react";
import AuthProvider from "../Hooks/Auth.js";

const Products = (props) => (
	
	<div>
		<h3>Products page</h3>
		<p className="page-p" id="products-p">
			products here...yknow...if I had any.
		</p>
	</div>
);

export default Products;
