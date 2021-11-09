import React, { useState, useCallback } from 'react';
import './App.css';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import { AuthContext } from './shared/context/auth-context';
import Layout from './shared/components/Layout/Layout';
import Users from './user/pages/Users';
import UserLogin from './user/pages/UserLogin';
import UserSignup from './user/pages/UserSignup';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);

	const login = useCallback((token, userId, tokenExpiration) => {
		setIsLoggedIn(true);
		setToken(token);
		setUserId(userId);
	}, []);

	const logout = useCallback(() => {
		setIsLoggedIn(false);
		setToken(null);
		setUserId(null);
	}, []);

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				token: token,
				userId: userId,
				login: login,
				logout: logout,
			}}>
			<Layout>
				<Routes>
					<Route path="/" element={<Navigate replace to="/users" />} />
					<Route path="users" element={<Users />} />
					<Route path="login" element={<UserLogin />} />
					<Route path="signup" element={<UserSignup />} />
					<Route path="*" element={<UserLogin />} />
				</Routes>

				<Outlet />
			</Layout>
		</AuthContext.Provider>
	);
};

export default App;
