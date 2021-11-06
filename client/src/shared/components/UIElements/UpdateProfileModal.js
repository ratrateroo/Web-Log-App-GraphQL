import React from 'react';
import { useParams } from 'react-router';

import Button from '../FormElements/Button';

import UpdateProfileForm from './UpdateProfileForm';

import { useForm } from '../../hooks/form-hook';

import './UpdateProfileModal.css';

const UpdateProfileModal = (props) => {
	const userId = useParams().userId;
	const [formState, inputHandler] = useForm(
		{
			username: {
				value: '',
				isValid: true,
			},
			email: {
				value: '',
				isValid: true,
			},
			password: {
				value: '',
				isValid: true,
			},
			firstname: {
				value: '',
				isValid: true,
			},
			middlename: {
				value: '',
				isValid: true,
			},
			lastname: {
				value: '',
				isValid: true,
			},
		},
		false
	);

	const updateProfileHandler = async (event) => {
		event.preventDefault();
		fetch('http://localhost:5000/users/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: formState.inputs.username.value,
				email: formState.inputs.email.value,
				password: formState.inputs.name.value,
				firstname: formState.inputs.firstname.value,
				middlename: formState.inputs.middlename.value,
				lastname: formState.inputs.lastname.value,
			}),
		});
	};

	return (
		<div className={`c-modal`} style={props.style}>
			<div className={`c-modal__header`}>
				<h2 className={`c-modal__title`}>{props.title}</h2>
			</div>
			<div className={`c-modal__body`}>
				<div className={`c-modal__content`}>
					<UpdateProfileForm
						onChange={(validity) => console.log('We get: ' + validity)}
						onInput={inputHandler}
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
								onClick={updateProfileHandler}>
								Ok
							</Button>
						</div>
					)}
				</footer>
			</div>
		</div>
	);
};

export default UpdateProfileModal;
