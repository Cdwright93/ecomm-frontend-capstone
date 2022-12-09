import "../App.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContent } from "../Hooks/Content";
import { useAuth } from "../Hooks/Auth";

const Register = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const { register } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			await register(email, password, firstname, lastname);
			navigate("/");
		} catch (error) {
			setError(error.message);
		}	
		setLoading(false);
	}

	return (
		<div className="pageheader">
			<h1 className="page-h1">Register</h1>
		<div className="container">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="card">
						<div className="card-header">
							<h3 className="regi-h3">Register</h3>
						</div>
						<div className="card-body">
							{error && <div className="alert alert-danger">{error}</div>}
							<form onSubmit={handleSubmit}>
								<div className="form-group">
									<label htmlFor="email" className="reg-lbl">Email</label>
									<input
										type="email"
										className="form-control"
										id="email"
										placeholder="Enter email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="password" className="reg-lbl">Password</label>
									<input
										type="password"
										className="form-control"
										id="password"
										placeholder="Password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="firstname"className="reg-lbl">First Name</label>
									<input
										type="text"
										className="form-control"
										id="firstname"
										placeholder="First Name"
										value={firstname}
										onChange={(e) => setFirstName(e.target.value)}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="lastname" className="reg-lbl">Last Name</label>
									<input
										type="text"
										className="form-control"
										id="lastname"
										placeholder="Last Name"
										value={lastname}
										onChange={(e) => setLastName(e.target.value)}
									/>
								</div>
								<button type="submit" className="btn btn-primary" disabled={loading}>
									Submit
								</button>
								<p className="page-p">
									Already have an account? <a href="/login">Login</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
						}

export default Register;
