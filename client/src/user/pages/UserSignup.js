import React from 'react';

import MainBody from '../../shared/components/UIElements/MainBody';
import UserSignupForm from '../components/UserSignupForm';

const UserSignup = (props) => {
	return (
		<MainBody title={props.title}>
			<UserSignupForm />
		</MainBody>
	);
};

export default UserSignup;
