import React, { Fragment } from 'react';
import './App.css';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import Layout from './shared/components/Layout/Layout';
import Users from './user/pages/Users';
import UserLogin from './user/pages/UserLogin';
import UserSignup from './user/pages/UserSignup';
import RequireAuth from './shared/auth/RequireAuth';
import SampleBlog from './user/pages/SampleBlog';

const App = () => {
	return (
		<Fragment>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Navigate replace to="/blogs" />} />
					{/* <Route path="users" element={<Users />} /> */}
					<Route path="/login" element={<UserLogin />} />

					<Route path="/signup" element={<UserSignup />} />
					<Route path="/blogs" element={<SampleBlog />} />

					<Route
						path="/users"
						element={
							<RequireAuth>
								<Users />
							</RequireAuth>
						}
					/>
					<Route path="*" element={<UserLogin />} />
				</Route>
			</Routes>
		</Fragment>
	);
};

export default App;
