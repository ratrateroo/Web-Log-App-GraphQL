import React from 'react';

import './BlogItem.css';

const BlogItem = (props) => {
	return (
		<li className="o-blog-list__item">
			<div className="c-post">
				<div className="c-post__image">
					<img
						className="c-post__image-pic"
						src={props.image}
						alt={props.title}
					/>
				</div>

				<div className="c-post__details">
					<h2 className="c-post__title">{props.title}</h2>
					<h3 className="c-post__author">{props.author}</h3>
				</div>
			</div>
		</li>
	);
};

export default BlogItem;
