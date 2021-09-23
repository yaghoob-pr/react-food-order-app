import ReactDOM from "react-dom";
import { Fragment } from "react";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart}></div>;
};

const ModalOverly = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElemnt = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart} />, portalElemnt)}
      {ReactDOM.createPortal(
        <ModalOverly>{props.children}</ModalOverly>,
        portalElemnt
      )}
    </Fragment>
  );
};

export default Modal;
