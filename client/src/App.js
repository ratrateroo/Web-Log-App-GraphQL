import React, { useState, useCallback } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';

import UserLogin from './user/pages/UserLogin';
import UserSignupForm from './user/components/UserSignupForm';
import UserProfile from './user/pages/UserProfile';
//import UserBlogs from './user/pages/UserBlogs';
import Users from './user/pages/Users';

// import Blog from './blogs/pages/Blog';
// import Blogs from './blogs/pages/Blogs';
// import CreateBlog from './blogs/pages/CreateBlog';
// import UpdateBlog from './blogs/pages/UpdateBlog';

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

	let routes = (
		<Routes>
			{/* <Route path="/" exact>
				<Blogs title="Blogs" />
			</Route> */}
			{/* {token && <Redirect from="/signup" to="/" exact />} */}
			{/* {token && <Redirect to="/" />} */}
			{/* {!token && (
				<Route path="/users" exact>
					<Users title="Users" />
				</Route>
			)} */}
			{/* <Route>
				{!token && <Redirect from="/users" to="/login" exact />}
				{token && <Redirect from="/login" to="/users" exact />}
			</Route> */}

			{/* <Route path="/blogs/:uid" exact>
				<UserBlogs title="User Blogs" />
			</Route> */}
			{/* <Route path="/blog/new" exact>
				<CreateBlog title="Create Blog" />
			</Route> */}
			{/* <Route path="/blog/update/:bid" exact>
				<UpdateBlog title="Update Blog" />
			</Route> */}
			{/* <Route path="/blog/:bid" exact>
				<Blog title="<Username>'s Blog" />
			</Route> */}
			{isLoggedIn && (
				<Route
					path="/profile/:uid"
					element={<UserProfile title="User Profile" />}></Route>
			)}
			<Route
				path="/login"
				element={<UserLogin title="User Login" />}></Route>
			{!isLoggedIn && (
				<Route
					path="/signup"
					element={<UserSignupForm title="User Signup" />}></Route>
			)}
			{/* {!token && <Redirect from="/" to="/login" exact />} */}
		</Routes>
	);

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				token: token,
				userId: userId,
				login: login,
				logout: logout,
			}}>
			<MainNavigation />
			{routes}
		</AuthContext.Provider>
	);
};

export default App;
