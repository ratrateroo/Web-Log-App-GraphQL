import React, { Fragment } from 'react';
import MainNavigation from '../Navigation/MainNavigation';
import AuthProvider from '../../auth/AuthProvider';
import { Outlet } from 'react-router';

const Layout = (props) => {
	return (
		<Fragment>
			<MainNavigation />
			<Outlet />
		</Fragment>
	);
};

export default Layout;
