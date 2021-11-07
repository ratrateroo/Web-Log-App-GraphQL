import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
//import App from './App';
import App from './TestApp/App';
import reportWebVitals from './reportWebVitals';
import Expenses from './TestApp/routes/expenses';
import Invoices from './TestApp/routes/invoices';
import Invoice from './TestApp/routes/invoice';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="expenses" element={<Expenses />} />
					<Route path="invoices" element={<Invoices />}>
						<Route
							index
							element={
								<main style={{ padding: '1rem' }}>
									<p>Select an invoice</p>
								</main>
							}
						/>
						<Route path=":invoiceId" element={<Invoice />} />
					</Route>
					<Route
						path="*"
						element={
							<main style={{ padding: '1rem' }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
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
