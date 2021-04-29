import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = ({ onClickedBackdrop }) => {
  return <div className={classes.backdrop} onClick={onClickedBackdrop} />;
};

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children, onClickedBackdrop }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClickedBackdrop={onClickedBackdrop} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

Modal.propTypes = {};

export default Modal;
