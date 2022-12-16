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
		<div className="pageheader" style={{
			padding:"20rem"
		}}>
				<div className="product_image">
					<h2 className="page-h3" style={{
					position: "absolute",
						left: "40rem",
						top: "10rem",
						fontSize: "4rem",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						marginTop: "1rem",
					}}>{product.name}</h2>
					<img src={product.image} style={{
						width: "100%",
						height: "65%",
						position: "absolute",
						left: "-22rem",
						top: "10rem",
						marginBottom: "1rem",
						objectFit: "contain",
					}} alt={product.name} />
				</div>
				<div className="product__details">
					<p className="page-p" style={{
					textAlign: "center",
					position: "absolute",
					left: "10rem",
					top: "20rem",
					fontStyle: "italic",
					}}>{product.description}</p>
					<br/>
					<br/>
					<br/>
				<button className="product-button-1" style={{
					position: "absolute",
					left: "50rem",
					top: "30rem",
					fontSize: "1.5rem",
				}}
						onClick={() => {
							setProduct(product);
							navigate("/checkout");
						} 
						}
					>
						Subscribe
				</button>
				<div className="filler-div">

				</div>
				<p className="page-p" style={{
					position: "absolute",
					left: "10rem",
					top: "25rem",
					fontSize: "2rem",
				fontStyle: "italic",
				}}>
				${product.price}.00/month</p>
			</div>
		</div>
	);
};

export default Product;
