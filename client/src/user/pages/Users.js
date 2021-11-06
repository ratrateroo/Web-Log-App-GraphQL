import React from 'react';

import MainBody from '../../shared/components/UIElements/MainBody';

import UsersList from '../components/UsersList';

const Users = (props) => {
	return (
		<MainBody title={props.title}>
			<UsersList />
		</MainBody>
	);
};

export default Users;
