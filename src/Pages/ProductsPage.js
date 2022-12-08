import "../App.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContent } from "../Hooks/Content";

const Products = (props) => {
	const navigate = useNavigate();
	const { products } = useContent();
	return (
		<div className="App-header">
			<div>
			<h1 className="page-h1">Products</h1>
			</div>
			{products.map((product) => (
				<div key={product._id} id={product._id} className="product-card">
					<p className="product-title">{product.name}</p>
					<img src={product.image} alt={product.name} className="product-image"/>
					<p className="product-p">{product.description}</p>
					<p className="product-p">${product.price}.00/month</p>
					<button className='product-button'onClick={() => navigate(`/products/${product.id}`)}>
						<p className='product-button-p'>See more</p>
					</button>
				</div>
			))}
		</div>
	);
};

export default Products;
