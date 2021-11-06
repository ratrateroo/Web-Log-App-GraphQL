import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import './Modal.css';

const ModalOverlay = (props) => {
	const content = (
		<div className={`c-modal`} style={props.style}>
			<header className={`c-modal__header`}>
				<h2 className={`c-modal__title`}>{props.header}</h2>
			</header>
			<div>
				<div className={`c-modal__content-`}>{props.children}</div>
				<footer className={`c-modal__footer`}>{props.footer}</footer>
			</div>
		</div>
	);

	return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
	return (
		<React.Fragment>
			{props.show && <Backdrop onClick={props.onCancel} />}
			<CSSTransition
				in={props.show}
				mountOnEnter
				unmountOnExit
				timeout={200}
				clasNames="c-modal">
				<ModalOverlay {...props} />
			</CSSTransition>
		</React.Fragment>
	);
};

export default Modal;
