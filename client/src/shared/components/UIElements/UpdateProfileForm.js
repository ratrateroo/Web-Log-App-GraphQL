import React from 'react';

import Input from '../FormElements/Input';

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../util/validators';

import './UpdateProfileForm.css';

const UpdateProfileForm = (props) => {
	return (
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
	);
};

export default UpdateProfileForm;
