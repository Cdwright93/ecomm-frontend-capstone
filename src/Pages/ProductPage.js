import "../App.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContent } from "../Hooks/Content";
import { useAuth } from "../Hooks/Auth";

const Product = (props) => (
	<div>
		<h3>Product page</h3>
		<p className="page-p">
			Welcome to the product page. This is where products would go....IF I HAD
			ANY.
		</p>
	</div>
);

export default Product;
