import React from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './UserNavLinks.css';

const NavLinks = (props) => {
	return (
		<AuthContext.Consumer>
			{(context) => {
				return (
					<ul className="c-user-navigation__items">
						{!context.isLoggedIn && (
							<React.Fragment>
								<li className="c-user-navigation__item">
									<NavLink
										to="/signup"
										className="c-user-navigation__link"
										exact>
										Signup
									</NavLink>
								</li>
								<li className="c-user-navigation__item">
									<NavLink
										to="/login"
										className="c-user-navigation__link"
										exact>
										Login
									</NavLink>
								</li>
							</React.Fragment>
						)}
						{context.isLoggedIn && (
							<li className="c--navigation__item">
								<button
									className="c-user-navigation__link"
									onClick={context.logout}>
									Logout
								</button>
							</li>
						)}
					</ul>
				);
			}}
		</AuthContext.Consumer>
	);
};

export default NavLinks;
