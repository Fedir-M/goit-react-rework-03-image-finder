/* eslint-disable react/prop-types */
import { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";
import Button from "../UI/Button/Button";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeForEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeForEsc);
  }

  closeForEsc = (e) => {
    if (e.code === "Escape") {
      this.props.onCloseModal();
    }
  };

  closeModal = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { largeImage, onCloseModal } = this.props;
    console.log("Large Image URL:", largeImage);

    return createPortal(
      // портал принимает два парамерта: 1-шаблон разметкиБ 2й-элемент из домДерева, который будет контейнером для шаблона разметки
      <div className={s.overlay} onClick={this.closeModal}>
        <div className={s.modal}>
          <Button
            className={s.closeButtonModal}
            onClick={onCloseModal}
            icon="iconcross"
          />
          <img src={largeImage} alt="big size image" className={s.image} />
        </div>
      </div>,
      modalRoot
    );
  }
}
