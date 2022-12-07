import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
		<div>
			<h3>Register page</h3>
			<p className="page-p">
				Welcome to the register page. This is where products would go....IF I HAD
				ANY.
				</p>
				<form onSubmit={handleSubmit} className="register-form">
					<div>
						<label htmlFor="email">Email | </label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						</div>
						<div>
							<label htmlFor="password">Password |</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							</div>
							<div>
								<label htmlFor="firstname" id="firstname">
									First Name | 
								</label>
								<input type="text" id="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
							</div>
							<div>
								<label htmlFor="firstname" id="firstname">
									Last Name | 
								</label>
								<input type="text" id="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)}/>
							</div>
							<span className="error">{error}</span>
							<button className="register-button" type="submit">Register</button>
							</form>
							</div>
							);
						}

export default Register;
