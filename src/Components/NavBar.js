import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import "../App.css";

const NavBar = (props) => {
	const { user, logout } = useAuth();

	return (
		<div className="navbar">
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Ecommerce
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/products">
									Products
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/cart">
									Cart
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/checkout">
									Checkout
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/login">
									Login
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/register">
									Register
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/profile">
									Profile
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/shipping">
									Shipping
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/payment">
									Payment
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/order">
									Order
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/logout">
									Logout
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
export default NavBar;
