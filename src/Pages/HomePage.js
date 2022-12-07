import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";


const Home = (props) => {
	const navigate = useNavigate();
	const { user, login } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await login(email, password);
		if (response.error) {
			setError(response.error);
		} else {
			navigate("/profile");
		}
	};

	return (
		<div className="App-header">
			<h3>Home</h3>
			{user ? (
				<div>
					<h2>Welcome {user.userdata.firstname}</h2>
					<button onClick={() => navigate("/profile")}>Profile</button>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type="submit">Login</button>
					{error && <p>{error}</p>}
				</form>
			)}
		</div>
	);
}


export default Home