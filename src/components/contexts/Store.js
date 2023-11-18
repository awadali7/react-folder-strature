import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
	user_data: {
		is_loading: true,
		is_verified: false,
		access_token: "",
		name: "",
		roles: [],
	},
};

const Store = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);
	return (
		<Context.Provider value={{ state, dispatch }}>
			{children}
		</Context.Provider>
	);
};

export const Context = createContext(initialState);

export default Store;
