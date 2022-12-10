import "../App.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContent } from "../Hooks/Content";
import { useAuth } from "../Hooks/Auth";

const Login = (props) => {
	const weirdSymbolsFromTheInternetThatIFound = "⩠⩛⨇⩗⪲⩾⋘⋙⋙⩞⪼⪻⪺⫷";
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const { login } = useAuth();
	const navigate = useNavigate();

	const randomizeWeirdSymbols = (count) => {
		let randomWeirdSymbols = "";
		for (let i = 0; i < count; i++) {
			randomWeirdSymbols += weirdSymbolsFromTheInternetThatIFound[Math.floor(Math.random() * weirdSymbolsFromTheInternetThatIFound.length)];
		}
		return randomWeirdSymbols;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			await login(email, password);
			navigate("/");
		} catch (error) {
			setError(error.message);
		}
		setLoading(false);
	}

	return (
		<div className="pageheader">
			<div className='login-box'>
				<h3 className="page-h1">Login</h3>
			<form onSubmit={handleSubmit}className='login-form'>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					/>
				<p className="w-sym 1">
					{randomizeWeirdSymbols(7)}
					</p>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<p className="w-sym 2">
					{randomizeWeirdSymbols(3)}
				</p>
				<button disabled={loading} type="submit" className="login-btn">Login</button>
				<p className="w-sym 3">
					{randomizeWeirdSymbols(5)}
				</p>
				{error && <p className="error">{error}</p>}
			</form>
			</div>
		</div>
	);
}

export default Login;