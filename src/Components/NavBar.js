import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import "../App.css";
import OOMlogo from "./OOMlogo.png";

const NavBar = (props) => {
	const { user, logout } = useAuth();
	return (
		<div className="navbar">
			<nav className="navbar fixed-top">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						<img
							src={OOMlogo}
							alt="OOMlogo"
							width="200"
							height="80"
							className="d-inline-block align-text-top"
						/>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasDarkNavbar"
						aria-controls="offcanvasDarkNavbar"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="offcanvas offcanvas-end text-bg-dark"
						tabindex="-1"
						id="offcanvasDarkNavbar"
						aria-labelledby="offcanvasDarkNavbarLabel"
					>
						<div className="offcanvas-header">
							<h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
								OOM
							</h5>
							<button
								type="button"
								className="btn-close btn-close-white"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
						</div>
						<div className="offcanvas-body">
							<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
								<li className="nav-item">
									<Link to={"/"} className="nav-item">
										{" "}
										Home
									</Link>
								</li>
								<li className="nav-item">
									{user ? (
										<Link to={"/profile"} className="nav-item">
											{" "}
											Profile
										</Link>
									) : (
										<Link to={"/login"} className="nav-item">
											{" "}
											Login
										</Link>
									)}
								</li>
								<li className="nav-item">
									{user ? (
										<Link to={"/"} onClick={logout} className="nav-item">
											{" "}
											Logout
										</Link>
									) : (
										<Link to={"/register"} className="nav-item">
											{" "}
											Register
										</Link>
									)}
								</li>
								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle"
										href="#"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										Dropdown
									</a>
									<ul className="dropdown-menu dropdown-menu-dark">
										<li>
											<Link className="dropdown-item" to={"/products"}>
												Our Products
											</Link>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Contact us
											</a>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
