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
	const { setProduct, createCheckout } = useContent();


	return (
		<div className="pageheader">
			<div className="product-wrapper" style={{
				border: "3px solid black",
				borderRadius: "10px",
				padding: "1rem",
			}}>
				<div className="product_image">
					<h2 className="page-h3" style={{
						position: "relative",
						left: "19%",
						fontSize: "4rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
						marginTop: "1rem",
					}}>{product.name}</h2>
					<img src={product.image} style={{
						width: "50%",
						height: "50%",
						position: "relative",
						left: "25%",
						marginBottom: "1rem",
					}} alt={product.name} />
				</div>
				<div className="product__details">
					<p className="page-p">{product.description}</p>
					<br/>
					<br/>
					<br/>
					<button className="product-button-1"
						onClick={() => {
							setProduct(product);
							navigate("/checkout");
						} 
						}
					>
						Subscribe
					</button>
						<p className="page-p">${product.price}.00/month</p>
				</div>
			</div>
		</div>
	);
};

export default Product;
