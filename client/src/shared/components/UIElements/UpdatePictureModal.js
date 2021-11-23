import React, { useState, useContext, useEffect } from 'react';
import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client';

import Button from '../FormElements/Button';
import ImageUpload from '../FormElements/ImageUpload';
import { useForm } from '../../hooks/form-hook';
import { AuthContext } from '../../context/auth-context';

import './UpdatePictureModal.css';

export const profileImageQuery = gql`
	{
		profileImage(id: $id) {
			_id
			username
			email
			password
			firstname
			middlename
			lastname
			profileimage
		}
	}
`;

const SINGLE_UPLOAD_MUTATION = gql`
	mutation uploadProfileImage($file: Upload!) {
		uploadProfileImage(file: $file) {
			filename
			mimetype
			encoding
		}
	}
`;

const UpdatePictureModal = (props) => {
	const { data, loading } = useQuery(profileImageQuery, {
		variables: { id: props.userId },
	});
	console.log(data);
	const [currentimage, setCurrentImage] = useState();
	const auth = useContext(AuthContext);

	// useEffect(() => {
	// 	const fetchUser = async () => {
	// 		try {
	// 			const requestBody = {
	// 				query: `
	// 				query User($id: ID!) {
	// 				profileImage(id: $id) {
	// 					_id
	// 					username
	// 					email
	// 					password
	// 					firstname
	// 					middlename
	// 					lastname
	// 					profileimage
	// 					createdBlogs {
	// 						_id

	// 					}

	// 				}
	// 				}
	// 			`,
	// 				variables: {
	// 					id: props.userId,
	// 				},
	// 			};

	// 			fetch('http://localhost:8000/graphql', {
	// 				method: 'POST',
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 					Authorization: 'Bearer ' + auth.token,
	// 				},
	// 				body: JSON.stringify(requestBody),
	// 			})
	// 				.then((res) => {
	// 					if (res.status !== 200 && res.status !== 201) {
	// 						throw new Error('Failed!');
	// 					}

	// 					return res.json();
	// 				})
	// 				.then((resData) => {
	// 					console.log(resData);
	// 					console.log(resData.data);
	// 					console.log(resData.data.user);
	// 					//console.log(resData.data.user.createdBlogs.length);

	// 					//setUserCreatedBlogs(resData.data.user.createdBlogs.length);
	// 				})
	// 				.catch((err) => {
	// 					console.log(err);
	// 				});

	// 			console.log('Getting Profile Image');
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	};
	// 	fetchUser();
	// }, []);
	useEffect(() => {
		// console.log(
		// 	'Current image: ' + props.profileimage + ' changed to: ' + currentimage
		// );
		console.log(formState.isValid);
	}, [currentimage]);

	const [formState, inputHandler] = useForm(
		{
			image: {
				value: {},
				isValid: null,
			},
		},
		false
	);

	const [uploadProfileImageMutation] = useMutation(SINGLE_UPLOAD_MUTATION);
	const apolloClient = useApolloClient();

	// const changeCurrentImageHandler = (image) => {
	// 	setCurrentImage(image);
	// };

	const onChangeCurrentImageHandler = (image) => {
		// formState.inputs.profileimage.isValid &&
		// 	uploadProfileImageMutation({
		// 		variables: { file: formState.inputs.profileimage.value },
		// 	}).then(() => {
		// 		apolloClient.resetStore();
		// 	});

		setCurrentImage(image);
	};

	const updateProfileImageHandler = (event) => {
		console.log('Update Profile Image');

		event.preventDefault();

		uploadProfileImageMutation({
			variables: { file: formState.inputs.image.value },
		}).then(() => {
			apolloClient.resetStore();
		});
		console.log(formState);

		// const formData = new FormData();

		// const requestBody = {
		// 	query: `
		// 	mutation {
		// 		updateImage(
		// 			userId: "${props.userId}",
		// 			profileimage: "${currentimage}",

		// 		) {
		// 			username
		// 			profileimage
		// 			email
		// 		}
		// 	}
		// 	`,
		// };

		// formData.append('image', currentimage);
		// console.log(currentimage);

		// const options = {
		// 	method: 'POST',
		// 	//headers: {
		// 	//'Content-Type': 'application/json',
		// 	//Authorization: 'Bearer ' + auth.token,
		// 	//'Access-Control-Allow-Origin': 'http://localhost:3000',
		// 	//'Access-Control-Allow-Credentials': 'true',
		// 	//},
		// 	body: formData,
		// };

		// delete options.headers['Content-Type'];

		// fetch('http://localhost:8000/graphql', options)
		// 	.then((res) => {
		// 		if (res.status !== 200 && res.status !== 201) {
		// 			throw new Error('Failed!');
		// 		}
		// 		return res.json();
		// 	})
		// 	.then((resData) => {
		// 		console.log(resData);
		// 		console.log('Image updated.');
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	};

	return (
		<div className={`c-modal`} style={props.style}>
			<div className={`c-modal__header`}>
				<h2 className={`c-modal__title`}>{props.title}</h2>
			</div>
			<div className={`c-modal__body`}>
				<div className={`c-modal__content`}>
					{/* <div>
						
						<input type="file" onChange={} />
						<button onClick={}>Upload!</button>
					
					</div> */}

					<div className="c-user-updateprofile">
						<div className="c-user-updateprofile__image">
							<img
								className="c-user-updateprofile__image-pic"
								src={currentimage}
								alt={props.username}
							/>
						</div>
					</div>
					<ImageUpload
						id="image"
						onInput={inputHandler}
						onUpload={onChangeCurrentImageHandler}
						//currentimage={props.profileimage}
						errorText={!currentimage ? 'Please provide an image.' : null}
					/>
				</div>
				<footer className={`c-modal__footer`}>
					{props.canCancel && (
						<div className="c-form-button">
							<Button cancel onClick={props.onCancel}>
								Cancel
							</Button>
						</div>
					)}

					{props.canConfirm && (
						<div className="c-form-button">
							<Button
								submit
								disabled={!formState.isValid}
								onClick={updateProfileImageHandler}>
								Ok
							</Button>
						</div>
					)}
				</footer>
			</div>
		</div>
	);
};

export default UpdatePictureModal;
