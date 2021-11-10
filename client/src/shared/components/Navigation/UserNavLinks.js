import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../auth/AuthContext';
import './UserNavLinks.css';

const NavLinks = (props) => {
	let navigate = useNavigate();
	let auth = useContext(AuthContext);

	console.log(auth.isLoggedIn);

	// return (
	// 	<AuthContext.Consumer>
	// 		{(context) => {
	return (
		<ul className="c-user-navigation__items">
			{!auth.isLoggedIn && (
				<React.Fragment>
					<li className="c-user-navigation__item">
						<NavLink to="/signup" className="c-user-navigation__link">
							Signup
						</NavLink>
					</li>
					<li className="c-user-navigation__item">
						<NavLink to="/login" className="c-user-navigation__link">
							Login
						</NavLink>
					</li>
				</React.Fragment>
			)}
			{auth.isLoggedIn && (
				<li className="c--navigation__item">
					<button
						className="c-user-navigation__link"
						onClick={auth.logout(() => navigate('/'))}>
						Logout
					</button>
				</li>
			)}
		</ul>
	);
	// 		}}
	// 	</AuthContext.Consumer>
	// );
};

export default NavLinks;
