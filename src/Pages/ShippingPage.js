import "../App.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContent } from "../Hooks/Content";
import { useAuth } from "../Hooks/Auth";

const Shipping = (props) => (
	<div>
		<h3>Shipping page</h3>
		<p className="page-p">
			Welcome to the shipping page. This is where products would go....IF I HAD
			ANY.
		</p>
	</div>
);

export default Shipping;
