import React, { useState } from 'react';

import './UserBlogList.css';
import image from '../../Images/cove view.jpg';
import Button from '../../shared/components/FormElements/Button';
//import SimpleModal from '../../shared/components/UIElements/SimpleModal';
import UserBlogItem from './UserBlogItem';
const UserBlogList = (props) => {
	const BLOGS = [
		{
			id: 'b1',
			image: image,
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
			category: 'Javascript',
			created: 'Jan-14-12',
			updated: 'Jan-14-12',
		},
		{
			id: 'b2',
			image: image,
			title: 'Wizard of Oz',
			author: 'Aurora Barnuts',
			category: 'Javascript',
			created: 'Jan-14-12',
			updated: 'Jan-14-12',
		},
		{
			id: 'b3',
			image: image,
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
			category: 'Javascript',
			created: 'Jan-14-12',
			updated: 'Jan-14-12',
		},
		{
			id: 'b4',
			image: image,
			title: 'Wizard of Oz',
			author: 'Aurora Barnuts',
			category: 'Javascript',
			created: 'Jan-14-12',
			updated: 'Jan-14-12',
		},
		{
			id: 'b5',
			image: image,
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
			category: 'Javascript',
			created: 'Jan-14-12',
			updated: 'Jan-14-12',
		},
		{
			id: 'b6',
			image: image,
			title: 'Wizard of Oz',
			author: 'Aurora Barnuts',
			category: 'Javascript',
			created: 'Jan-14-12',
			updated: 'Jan-14-12',
		},
		{
			id: 'b7',
			image: image,
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
			category: 'Javascript',
			created: 'Jan-14-12',
			updated: 'Jan-14-12',
		},
		{
			id: 'b8',
			image: image,
			title: 'Wizard of Oz',
			author: 'Aurora Barnuts',
			category: 'Javascript',
			created: 'Jan-14-12',
			updated: 'Jan-14-12',
		},

		{
			id: 'b9',
			image: image,
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
			category: 'Javascript',
			created: 'Jan-14-12',
			updated: 'Jan-14-12',
		},
		{
			id: 'b10',
			image: image,
			title: 'Wizard of Oz',
			author: 'Aurora Barnuts',
			category: 'Javascript',
			created: 'Jan-14-12',
			updated: 'Jan-14-12',
		},
		{
			id: 'b11',
			image: image,
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
			category: 'Javascript',
			created: 'Jan-14-12',
			updated: 'Jan-14-12',
		},
	];

	const [showConfirmModal, setShowConfirmModal] = useState(false);

	const showDeleteWarningHandler = () => {
		setShowConfirmModal(true);
	};
	const cancelDeleteHandler = () => {
		setShowConfirmModal(false);
	};

	return (
		<React.Fragment>
			{showConfirmModal && (
				// <SimpleModal
				// 	canConfirm
				// 	canCancel
				// 	onConfirm={cancelDeleteHandler}
				// 	onCancel={cancelDeleteHandler}
				// 	header="Confirm Delete">
				// 	<div>
				// 		<h2>Modal</h2>
				// 	</div>
				// </SimpleModal>

				<div>
					<h2>Modal</h2>
				</div>
			)}
			<div className="c-blogs-list">
				<div role="grid" className="c-blogs-table">
					<div role="row" className="c-blogs-table__header">
						<div role="gridcell" className="c-blog-header__cell">
							Blog No.
						</div>
						<div role="gridcell" className="c-blog-header__cell">
							Title
						</div>
						<div role="gridcell" className="c-blog-header__cell">
							Category
						</div>

						<div role="gridcell" className="c-blog-header__cell">
							Created
						</div>
						<div role="gridcell" className="c-blog-header__cell">
							Updated
						</div>
						<div role="gridcell" className="c-blog-header__cell">
							Actions
						</div>
					</div>

					<ul>
						{BLOGS.map((blog) => (
							<UserBlogItem
								key={blog.id}
								id={blog.id}
								image={blog.image}
								title={blog.title}
								author={blog.author}
								category={blog.category}
								created={blog.created}
								updated={blog.updated}
								onClick={showDeleteWarningHandler}
							/>
						))}
					</ul>
				</div>
				<div className="c-form-button">
					<Button submit type="submit">
						Create New
					</Button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default UserBlogList;
