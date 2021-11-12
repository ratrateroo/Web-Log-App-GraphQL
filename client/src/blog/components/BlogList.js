import React from 'react';

import BlogItem from './BlogItem';
import './BlogList.css';

const BlogList = (props) => {
	if (props.items.length === 0) {
		return (
			<div>
				<h2>No Blogs Found</h2>
			</div>
		);
	}

	return (
		<ul className="o-blog-list">
			{props.items.map((blog) => (
				<BlogItem
					key={blog.id}
					id={blog.id}
					image={blog.image}
					title={blog.title}
					author={blog.author}
				/>
			))}
		</ul>
	);
};

export default BlogList;
