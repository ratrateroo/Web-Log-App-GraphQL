import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = (props) => {
	if (props.href) {
		return (
			<a className="c-form-button__link" href={props.href}>
				{props.children}
			</a>
		);
	}
	if (props.to) {
		return (
			<Link
			// to={props.to}
			// exact={props.exact}
			// className={`button button--${props.size || 'default'} ${
			//    props.inverse && 'button--inverse'
			// } ${props.danger && 'button--danger'}`}
			>
				{props.children}
			</Link>
		);
	}

	if (props.heading) {
		return (
			<h1 className="c-page-heading" onClick={props.onClick}>
				{props.children}
			</h1>
		);
	}
	return (
		<button
			className={`${props.submit && 'c-form-button__submit'} 
                     ${props.edit && 'c-form-button__edit'}
                     ${props.cancel && 'c-form-button__cancel'}
                     ${props.delete && 'c-form-button__delete'}
                     `}
			type={props.type}
			onClick={props.onClick}
			disabled={props.disabled}>
			{props.children}
		</button>
	);
};

export default Button;
