import React, { Fragment, useEffect } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './shared/components/Layout/Layout';
import Users from './user/pages/Users';
import UserLogin from './user/pages/UserLogin';
import UserSignup from './user/pages/UserSignup';
import RequireAuth from './shared/auth/RequireAuth';
import Blogs from './blog/pages/Blogs';
import UserProfile from './user/pages/UserProfile';

const App = () => {
	useEffect(() => {
		const checkOnline = async () => {
			try {
				const requestBody = {
					query: `
        query {
			check{
				message
    			
    			
			}
    
          }
        
      `,
				};

				fetch('http://localhost:8000/graphql', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(requestBody),
				})
					.then((res) => {
						if (res.status !== 200 && res.status !== 201) {
							throw new Error('Failed!');
						}

						return res.json();
					})
					.then((resData) => {
						//console.log(resData.data);
						console.log('API is Online.');
					})
					.catch((err) => {
						console.log(err);
					});
			} catch (err) {
				console.log(err);
			}
		};
		checkOnline();
	}, []);
	return (
		<Fragment>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Navigate replace to="/blogs" />} />
					{/* <Route path="users" element={<Users />} /> */}
					<Route path="/login" element={<UserLogin />} />

					<Route path="/signup" element={<UserSignup />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/profile/:uid" element={<UserProfile />} />

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
