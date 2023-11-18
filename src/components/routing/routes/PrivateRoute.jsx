import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Context } from "../../contexts/Store";

const PrivateRoute = ({ children }) => {
	const { state } = useContext(Context);
	const is_verified = state.user_data.is_verified;

	const location = useLocation();

	return is_verified ? (
		children
	) : (
		<Navigate
			to={
				location.pathname
					? `auth/login?next=${location.pathname}`
					: "auth/login"
			}
		/>
	);
};

export default PrivateRoute;
