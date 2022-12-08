import "../App.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContent } from "../Hooks/Content";



//using an content provider to get the products
const Products = (props) => {
	const navigate = useNavigate();
	const { products } = useContent();
	const [search, setSearch] = useState("");
	const searchInput = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/products?search=${search}`);
		searchInput.current.value = "";
	};

	return (
		<div className="App-header">
			<h1 className="page-h1">Products</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Search"
					ref={searchInput}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button type="submit">Search</button>
			</form>
			{products.map((product) => (
				<div key={product._id} id={product._id} className="product-card">
					<p className="page-p">{product.name}</p>
					<img src={product.image} alt={product.name} />
					<p className="page-p">{product.description}</p>
					<p className="page-p">{product.price}</p>
					<button onClick={() => navigate(`/products/${product.id}`)}>
						Details
					</button>
				</div>
			))}
		</div>
	);

};

export default Products;
