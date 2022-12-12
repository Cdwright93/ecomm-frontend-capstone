import "../App.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContent } from "../Hooks/Content";
import { useAuth } from "../Hooks/Auth";

const Profile = (props) => {
	const { user } = useAuth();
	const weirdSymbolsFromTheInternetThatIFound = "⩠⩛⨇⩗⪲⩾⋘⋙⋙⩞⪼⪻⪺⫷";
	const randomizeWeirdSymbols = (count) => {
		let randomWeirdSymbols = "";
		for (let i = 0; i < count; i++) {
			randomWeirdSymbols += weirdSymbolsFromTheInternetThatIFound[Math.floor(Math.random() * weirdSymbolsFromTheInternetThatIFound.length)];
		}
		return randomWeirdSymbols;
	}
	return (
	<div className="pageheader">
		<div>
			<h1 className="page-h1">Profile</h1>
			<h3 className="profile-h3">
				Welcome, {user.userdata.firstname}<p className="w-sym">{randomizeWeirdSymbols(3)}</p>
			</h3>
		</div>
		<div className="profile">
			<div className="profile-info">
			<p className="w-sym">{randomizeWeirdSymbols(23)}</p>
				<h3 className="page-h4">Profile Information</h3>
				<p className="">
					<b>Subscription:</b> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; {user.userdata.subscribed.status ? "Active" : "Inactive"}
				</p>
				<p>
					<b>First Name:</b> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; {user.userdata.firstname}
				</p>
				<p>
					<b>Last Name:</b> &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; {user.userdata.lastname}
				</p>
				<p>
					<b>Email:</b> &nbsp;  {user.userdata.email}
				</p>
				<p>
					<b>Address: &nbsp;</b> {user.userdata.address ? user.userdata.address : "No address set"}
				</p>
				<p className="w-sym">{randomizeWeirdSymbols(23)}</p>
			</div>
			<div className="profile-options">
				<a className="profile-a" style={{
					fontSize: "1rem",
					position: "relative",
					top: "-10.5rem",
					left: "2rem",
				}}>change your email address</a>
				<br/>
				<a className="profile-a" style={{
					fontSize: "1rem",
					position: "relative",
					top: "-10.9rem",
					left: "2rem",
				}}>change your address</a>
			</div>
	</div>
	</div>
	);
};
export default Profile;
