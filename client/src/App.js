import React from 'react';
import './App.css';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import Layout from './shared/components/Layout/Layout';
import Users from './user/pages/Users';
import UserLogin from './user/pages/UserLogin';
import UserSignup from './user/pages/UserSignup';
import RequireAuth from './shared/auth/RequireAuth';

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Navigate replace to="/login" />} />
				{/* <Route path="users" element={<Users />} /> */}
				<Route path="/login" element={<UserLogin />} />

				<Route path="/signup" element={<UserSignup />} />

				<Route
					path="/users"
					element={
						<RequireAuth>
							<Users />
						</RequireAuth>
					}
				/>
				<Route path="*" element={<UserLogin />} />
			</Routes>

			<Outlet />
		</Layout>
	);
};

export default App;
