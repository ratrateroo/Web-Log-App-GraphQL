import React, { useContext } from 'react';

import './UserSignupForm.css';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
	VALIDATOR_REQUIRE,
	VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';

const UserSignupForm = (props) => {
	const auth = useContext(AuthContext);

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

	const signupSubmitHandler = async (event) => {
		event.preventDefault();

		const requestBody = {
			query: `
			mutation {
				createUser(userInput: {
					username: "${formState.inputs.username.value}",
					email: "${formState.inputs.email.value}",
					password: "${formState.inputs.password.value}",
					firstname: "${formState.inputs.firstname.value}",
					middlename: "${formState.inputs.middlename.value}",
					lastname: "${formState.inputs.lastname.value}",

				}) {
					userId
					token
					tokenExpiration
				}
			}
			`,
		};

		//OTHER WAY TO CREATE REQUEST BODY
		// const requestBody = {
		// 	query: `
		//   mutation CreateUser(
		// 	  $username: String!,
		// 	  $email: String!,
		// 	  $password: String!
		// 	  $firstname: String!,
		// 	  $middlename: String!,
		// 	  $lastname: String!,
		// 	  ) {
		//     createUser(userInput: {
		// 		username: $username,
		// 		email: $email,
		// 		password: $password,
		// 		firstname: $firstname,
		// 		middlename: $middlename,
		// 		lastname: $lastname
		// 		}) {
		//       _id
		//       username
		//     }
		//   }
		// `,
		// 	variables: {
		// 		username: formState.inputs.username.value,
		// 		email: formState.inputs.email.value,
		// 		password: formState.inputs.password.value,
		// 		firstname: formState.inputs.firstname.value,
		// 		middlename: formState.inputs.middlename.value,
		// 		lastname: formState.inputs.lastname.value,
		// 	},
		// };

		fetch('http://localhost:8000/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(requestBody),
		})
			.then((res) => {
				if (res.status !== 200 && res.status !== 201) {
					throw new Error('Failed!');
				}
				return res.json();
			})
			.then((resData) => {
				console.log(resData);
				if (resData.data.createUser.token) {
					auth.login(
						resData.data.createUser.token,
						resData.data.createUser.userId,
						resData.data.createUser.tokenExpiration
					);
				}
			})
			.catch((err) => {
				console.log(err);
			});
		console.log(formState.inputs);
	};

	return (
		<div className="c-form">
			<form onSubmit={signupSubmitHandler} className="c-form__body">
				<Input
					element="input"
					id="username"
					type="text"
					placeholder="Enter your username here!"
					label="Username:"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid username."
					onInput={inputHandler}
				/>

				<Input
					element="input"
					id="email"
					type="email"
					placeholder="Enter your email here!"
					label="Email:"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid email."
					onInput={inputHandler}
				/>

				<Input
					element="input"
					id="password"
					type="password"
					placeholder="Enter your password here!"
					label="Password:"
					validators={[VALIDATOR_MINLENGTH(5)]}
					errorText="Please enter a valid password with a minimum of 5 characters."
					onInput={inputHandler}
				/>

				<Input
					element="input"
					id="firstname"
					type="text"
					placeholder="Enter your firstname here!"
					label="First Name:"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid firstname."
					onInput={inputHandler}
				/>

				<Input
					element="input"
					id="middlename"
					type="text"
					placeholder="Enter your middlename here!"
					label="Middle Name:"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid middlename."
					onInput={inputHandler}
				/>

				<Input
					element="input"
					id="lastname"
					type="text"
					placeholder="Enter your lastname here!"
					label="Last Name:"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid lastname."
					onInput={inputHandler}
				/>

				<div className="c-form-button">
					<Button submit disabled={!formState.isValid}>
						Sign Up
					</Button>
				</div>
			</form>
		</div>
	);
};

export default UserSignupForm;
