import React from 'react';

import MainBody from '../../shared/components/UIElements/MainBody';

const SampleBlog = (props) => {
	return (
		<MainBody title={props.title}>
			<h1>BLOGS</h1>
		</MainBody>
	);
};

export default SampleBlog;
