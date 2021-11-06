import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './DefaultNavLinks.css';

const NavLinks = (props) => {
	const auth = useContext(AuthContext);

	return (
		<ul className="c-default-navigation__items">
			<li className="c-default-navigation__item">
				{/* <a href="../Blogs/Blogs.html" className="c-default-navigation__link">
               Blogs
            </a> */}
				<NavLink to="/blogs" className="c-default-navigation__link" exact>
					Blogs
				</NavLink>
			</li>
			<li className="c-default-navigation__">
				{/* <a href="../User List/User List.html" className="c-default-navigation__link">
               Users
            </a> */}
				<NavLink to="/users" className="c-default-navigation__link" exact>
					Users
				</NavLink>

				{auth.token && (
					<NavLink
						to="/friends"
						className="c-default-navigation__link"
						exact>
						Friends
					</NavLink>
				)}
			</li>
		</ul>
	);
};

export default NavLinks;
