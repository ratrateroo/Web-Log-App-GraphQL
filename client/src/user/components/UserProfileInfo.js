import React, { useState } from 'react';

import './UserProfileInfo.css';

import Button from '../../shared/components/FormElements/Button';

import UpdatePictureModal from '../../shared/components/UIElements/UpdatePictureModal';
import UpdateProfileModal from '../../shared/components/UIElements/UpdateProfileModal';

const UserProfileInfo = (props) => {
	const [updating, setUpdating] = useState(false);
	const [changeImage, setChangeImage] = useState(false);
	// const [createdBlogsCount, setCreatedBlogsCount] = useState();

	// useEffect(() => {
	// 	console.log(props.createdBlogs);
	// 	setCreatedBlogsCount(props.createdBlogs.length);
	// }, []);

	const startCreateEventHandler = () => {
		setUpdating(!updating);
	};

	const cancelCreateEventHandler = () => {
		setUpdating(!updating);
	};

	const startChangeImageHandler = () => {
		setChangeImage(!changeImage);
	};

	const cancelChangeImageHandler = () => {
		setChangeImage(!changeImage);
	};

	return (
		<div className="c-user-profile">
			{updating && (
				<UpdateProfileModal
					title="Update Profile Details"
					canCancel
					canConfirm
					onCancel={cancelCreateEventHandler}></UpdateProfileModal>
			)}
			{changeImage && (
				<UpdatePictureModal
					userId={props.userId}
					title="Update Profile Picture"
					canCancel
					canConfirm
					onCancel={cancelChangeImageHandler}
					profileimage={props.profileimage}></UpdatePictureModal>
			)}
			<div className="c-user-profile__image">
				<img
					className="c-user-profile__image-pic"
					src={props.profileimage}
					alt={props.username}
				/>
			</div>
			<Button onClick={startChangeImageHandler}>Change Image</Button>

			<div className="c-user-profile__info">
				<h2 className="c-user-profile__info__fullname">
					{props.firstname + ' ' + props.middlename + ' ' + props.lastname}
				</h2>
				<ul className="c-user-profile__info__detail-list">
					<li className="c-user-profile__info__detail-item">
						Blogs: {props.createdBlogs?.length}
					</li>
					<li className="c-user-profile__info__detail-item">
						Friends: {props.friends}
					</li>
				</ul>
				<Button onClick={startCreateEventHandler}>Update Profile</Button>
			</div>
		</div>
	);
};

export default UserProfileInfo;
