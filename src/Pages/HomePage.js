import "../App.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContent } from "../Hooks/Content";
import { useAuth } from "../Hooks/Auth";

const Home = (props) => {
	const weirdSymbolsFromTheInternetThatIFound = "⩠⩛⨇⩗⪲⩾⋘⋙⋙⩞⪼⪻⪺⫷";
	const navigate = useNavigate();
	const { user, login, logout } = useAuth();
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
	const randomizeWeirdSymbols = (count) => {
		let randomWeirdSymbols = "";
		for (let i = 0; i < count; i++) {
			randomWeirdSymbols += weirdSymbolsFromTheInternetThatIFound[Math.floor(Math.random() * weirdSymbolsFromTheInternetThatIFound.length)];
		}
		return randomWeirdSymbols;
	}
	//generate some ipsum lorem text in the p tag below
	return (
		<div className="pageheader">
			<div>
				<h3 className="page-h1">{randomizeWeirdSymbols(4)}</h3>
				{user ? (
				<div className="home-header">
					<h3 className="page-h3">Welcome back, {user.userdata.firstname}</h3>
						<p className="w-sym">
							{randomizeWeirdSymbols(26)}
						</p>
						<p className="page-p">
						Lorem Ipsum
"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac bibendum quam, ac fringilla mauris. Donec molestie facilisis neque, non pellentesque lacus elementum ut. Donec condimentum in nisl in interdum. Sed non purus ut lacus facilisis egestas. Fusce at vulputate enim. Mauris vel facilisis lacus. Mauris congue, lorem at ullamcorper posuere, tellus nisl auctor metus, a auctor justo augue semper velit. Suspendisse tincidunt convallis pellentesque. Aenean eu eleifend nunc. Suspendisse cursus nisi ipsum, ac vulputate turpis mattis sit amet. Duis commodo nec quam nec porttitor. Nulla mollis leo dui, vel gravida arcu blandit nec. Cras eleifend posuere lorem, sed finibus sapien efficitur ut. Quisque condimentum posuere facilisis. Nunc tempus viverra nunc, et aliquam libero. Aliquam venenatis dui at aliquam vehicula.
						</p>
						<p className="w-sym">
						{randomizeWeirdSymbols(22)}
						</p>
						<div className="home-buttons">
							<button className="home-button"onClick={() => navigate("/profile")}>Profile</button>
							<button className="home-button"onClick={() => navigate("/order")}>Orders</button>
							<button className="home-button"onClick={() => logout()}>Logout</button>
						</div>
					</div>
				) : (
					<div className="home-header">
						<h1 className="page-h3">Welcome!</h1>
					</div>
				)}

			</div>
		</div>
	)
}


export default Home