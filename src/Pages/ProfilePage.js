import "../App.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContent } from "../Hooks/Content";
import { useAuth } from "../Hooks/Auth";

const Profile = (props) => (
	<div className="pageheader">
		<div>
			<h1 className="page-h1">Profile</h1>
		</div>
		<p className="page-p">
			Welcome to the profile page. This is where profiles would go....IF I HAD
			ANY.
		</p>
	</div>
);

export default Profile;
