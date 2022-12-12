import "../App.css";
import { useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContent } from "../Hooks/Content";
import { useAuth } from "../Hooks/Auth";

const Product = (props) => {
	const productId = useParams().id;
	const { products } = useContent();
	const product = products.find((product) => product._id === productId);
	const { user } = useAuth();
	const navigate = useNavigate();

	return (
		<div className="pageheader">
			<div className="product-wrapper" style={{
				border: "3px solid black",
				borderRadius: "10px",
				padding: "1rem",
			}}>
				<div className="product__image">
					<h2 className="page-h3" style={{
						position: "relative",
						left: "19%",
					}}>{product.name}</h2>
					<img src={product.image} alt={product.name} />
				</div>
				<div className="product__details">
					<p className="page-p">{product.description}</p>
					<p className="page-p">${product.price}.00/month</p>
					<br/>
					<br/>
					<br/>
					<button className="product-button-1"
						onClick={() => {
							navigate("/order");
						}}
					>
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
