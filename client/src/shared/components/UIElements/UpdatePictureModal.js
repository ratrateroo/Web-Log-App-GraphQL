import React, { useState, useContext } from 'react';

import Button from '../FormElements/Button';

import ImageUpload from '../FormElements/ImageUpload';

import { useForm } from '../../hooks/form-hook';

import { AuthContext } from '../../context/auth-context';

import './UpdatePictureModal.css';

const UpdatePictureModal = (props) => {
	const [currentimage, setCurrentImage] = useState(props.profileimage);

	const auth = useContext(AuthContext);

	const [formState, inputHandler] = useForm(
		{
			profileimage: {
				value: '',
				isValid: true,
			},
		},
		false
	);

	const changeCurrentImageHandler = (image) => {
		setCurrentImage(image);
	};

	const updateProfileImageHandler = (event) => {
		console.log('Update Profile Image');

		event.preventDefault();

		const formData = new FormData();

		const requestBody = {
			query: `
			mutation {
				updateImage( 
					userId: "${props.userId}",
					profileimage: "${currentimage}",					

				) {
					username
					profileimage
					email
				}
			}
			`,
		};

		formData.append('image', currentimage);
		console.log(currentimage);

		const options = {
			method: 'POST',
			//headers: {
			//'Content-Type': 'application/json',
			//Authorization: 'Bearer ' + auth.token,
			//'Access-Control-Allow-Origin': 'http://localhost:3000',
			//'Access-Control-Allow-Credentials': 'true',
			//},
			body: formData,
		};

		delete options.headers['Content-Type'];

		fetch('http://localhost:8000/graphql', options)
			.then((res) => {
				if (res.status !== 200 && res.status !== 201) {
					throw new Error('Failed!');
				}
				return res.json();
			})
			.then((resData) => {
				console.log(resData);
				console.log('Image updated.');
			})
			.catch((err) => {
				console.log(err);
			});
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
						onUpload={changeCurrentImageHandler}
						currentimage={props.profileimage}
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
								disabled={!currentimage}
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
