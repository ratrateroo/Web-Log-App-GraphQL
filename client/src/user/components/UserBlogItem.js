import React from 'react';

import './UserBlogItem.css';

import Button from '../../shared/components/FormElements/Button';

const UserBlogItem = (props) => {
	return (
		<li>
			<div role="row" className="c-blogs-table__row">
				<div role="gridcell" className="c-blog-row__cell">
					{props.id}
				</div>
				<div role="gridcell" className="c-blog-row__cell">
					{props.title}
				</div>
				<div role="gridcell" className="c-blog-row__cell">
					{props.category}
				</div>

				<div role="gridcell" className="c-blog-row__cell">
					{props.created}
				</div>
				<div role="gridcell" className="c-blog-row__cell">
					{props.updated}
				</div>
				<div role="gridcell" className="c-blog-row__cell">
					<div className="c-action-button">
						<Button edit>Edit</Button>
						<Button delete onClick={props.onClick}>
							Delete
						</Button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default UserBlogItem;
