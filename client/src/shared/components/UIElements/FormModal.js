import React from 'react';

import Button from '../FormElements/Button';

import Input from '../FormElements/Input';

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../util/validators';

import { useForm } from '../../hooks/form-hook';

import './FormModal.css';

const modal = (props) => (
	<div className={`c-modal`} style={props.style}>
		<header className={`c-modal__header`}>
			<h2 className={`c-modal__title`}>{props.title}</h2>
		</header>
		<div>
			<div className={`c-modal__content-`}>
				<div className="c-form">
					<form onSubmit={props.onSubmit} className="c-form__body">
						<Input
							element="input"
							id="username"
							type="text"
							placeholder="Enter your username here!"
							label="Username:"
							validators={[VALIDATOR_REQUIRE()]}
							errorText="Please enter a valid username."
							onInput={props.onInput}
						/>

						<Input
							element="input"
							id="email"
							type="email"
							placeholder="Enter your email here!"
							label="Email:"
							validators={[VALIDATOR_REQUIRE()]}
							errorText="Please enter a valid email."
							onInput={props.onInput}
						/>

						<Input
							element="input"
							id="password"
							type="password"
							placeholder="Enter your password here!"
							label="Password:"
							validators={[VALIDATOR_MINLENGTH(5)]}
							errorText="Please enter a valid password with a minimum of 5 characters."
							onInput={props.onInput}
						/>

						<Input
							element="input"
							id="firstname"
							type="text"
							placeholder="Enter your firstname here!"
							label="First Name:"
							validators={[VALIDATOR_REQUIRE()]}
							errorText="Please enter a valid firstname."
							onInput={props.onInput}
						/>

						<Input
							element="input"
							id="middlename"
							type="text"
							placeholder="Enter your middlename here!"
							label="Middle Name:"
							validators={[VALIDATOR_REQUIRE()]}
							errorText="Please enter a valid middlename."
							onInput={props.onInput}
						/>

						<Input
							element="input"
							id="lastname"
							type="text"
							placeholder="Enter your lastname here!"
							label="Last Name:"
							validators={[VALIDATOR_REQUIRE()]}
							errorText="Please enter a valid lastname."
							onInput={props.onInput}
						/>
					</form>
				</div>
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
						<Button submit onClick={props.onConfirm}>
							Ok
						</Button>
					</div>
				)}
			</footer>
		</div>
	</div>
);

export default modal;
