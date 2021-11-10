import React, { useState, useCallback } from 'react';

//import { fakeAuthProvider } from './fakeAuthProvider';

import { AuthContext } from './AuthContext';
const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);

	const login = useCallback((token, userId, tokenExpiration, callback) => {
		setIsLoggedIn(true);
		setToken(token);
		setUserId(userId);
		callback();
	}, []);

	const logout = useCallback((callback) => {
		setIsLoggedIn(false);
		setToken(null);
		setUserId(null);
		callback();
	}, []);

	let value = {
		isLoggedIn: isLoggedIn,
		token: token,
		userId: userId,
		login: login,
		logout: logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
