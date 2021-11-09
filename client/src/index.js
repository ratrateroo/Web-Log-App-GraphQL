import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		{/* <Router>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="users" element={<Users />} />
					<Route path="login" element={<UserLogin />} />
					<Route path="signup" element={<UserSignUp />} />
					<Route path="*" element={<UserLogin />} />
				</Route>
			</Routes>
		</Router> */}
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
