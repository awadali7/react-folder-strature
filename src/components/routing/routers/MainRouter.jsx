import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../routes/PrivateRoute";
import AppRouter from "./AppRouter";

const MainRouter = () => {
	return isLoading ? (
		<SectionLoader />
	) : (
		<Routes>
			<Route
				path="auth/*"
				element={
					<AuthRoute>
						<AuthRouter />
					</AuthRoute>
				}
			/>
			<Route
				path="/*"
				element={
					<PrivateRoute>
						<AppRouter />
					</PrivateRoute>
				}
			/>
		</Routes>
	);
};

export default MainRouter;
