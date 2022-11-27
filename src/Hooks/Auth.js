import { useState, useEffect, createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
const AuthContext = createContext();

/* 
@Source: https://blog.logrocket.com/complete-guide-authentication-with-react-router-v6/#basic-routing-with-routes
*/
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			const decodedToken = jwt_decode(token);
			if (decodedToken.exp * 1000 < Date.now()) {
				localStorage.removeItem("token");
			} else {
				setUser(decodedToken);
			}
		}
		setLoading(false);
	}, []);

	const login = async (email, password) => {
		const response = await fetch(`${urlEndpoint}/users/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});
		const data = await response.json();
		if (data.token) {
			localStorage.setItem("token", data.token);
			setUser(jwt_decode(data.token));
			navigate("/");
		} else {
			return data;
		}
	};

	const getUserDetails = async (id) => {
		const response = await fetch(`${urlEndpoint}/users/${id}`);
		const data = await response.json();
		return data;
	}


	const register = async (name, email, password) => {
		const response = await fetch(`${urlEndpoint}/users/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email
			, password }),
		});
		const data = await response.json();
		if (data.token) {
			localStorage.setItem("token", data.token);
			setUser(jwt_decode(data.token));
			navigate("/");
		} else {
			return data;
		}
	};

	const logout = () => {
		localStorage.removeItem("token");
		setUser(null);
		navigate("/login");
	};

	const verifyAdmin = () => {
		if (user && user.isAdmin) {
			return true;
		} else {
			return false;
		}
	};

	const value = useMemo(() => {
		return { user, login, logout, register, verifyAdmin, };
	}, [user]);

	if (loading) {
		return <h1>Loading...</h1>;
	}
	
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	return useContext(AuthContext);
};



export default AuthProvider;
