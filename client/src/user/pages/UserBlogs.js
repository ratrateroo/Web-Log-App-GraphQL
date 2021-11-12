import React from 'react';

import MainBody from '../../shared/components/UIElements/MainBody';
import UserBlogList from '../components/UserBlogList';

const UserBlogs = (props) => {
	return (
		<MainBody title={props.title}>
			<UserBlogList />
		</MainBody>
	);
};

export default UserBlogs;
