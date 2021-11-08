import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import Users from './user/pages/Users';
import UserLogin from './user/pages/UserLogin';
import UserSignUp from './user/pages/UserSignup';
import reportWebVitals from './reportWebVitals';
import MainNavigation from './shared/components/Navigation/MainNavigation';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<MainNavigation />
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="users" element={<Users />} />
					<Route path="login" element={<UserLogin />} />
					<Route path="signup" element={<UserSignUp />} />
					<Route path="*" element={<UserLogin />} />
				</Route>
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
