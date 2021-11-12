import React from 'react';

import BlogList from '../components/BlogList';
import MainBody from '../../shared/components/UIElements/MainBody';
import image from '../../Images/cove view.jpg';
const Blogs = (props) => {
	const BLOGS = [
		{
			id: 'b1',
			image: image,
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b2',
			image: image,
			title: 'Wizard of Oz',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b3',
			image: image,
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b4',
			image: image,
			title: 'Wizard of Oz',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b5',
			image: image,
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b6',
			image: image,
			title: 'Wizard of Oz',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b7',
			image: image,
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b8',
			image: image,
			title: 'Wizard of Oz',
			author: 'Aurora Barnuts',
		},

		{
			id: 'b9',
			image: image,
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b10',
			image: image,
			title: 'Wizard of Oz',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b11',
			image: image,
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
		},
	];
	return (
		<MainBody title={props.title}>
			<BlogList items={BLOGS} />
		</MainBody>
	);
};

export default Blogs;
