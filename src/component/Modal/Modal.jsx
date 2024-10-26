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
  // Когда пользователь кликает на оверлей, срабатывает обработчик onClick, который вызывает метод closeModal.
  // В методе closeModal проверяется, равны ли e.currentTarget (элемент, на который установлен обработчик) и e.target (элемент, на который был выполнен клик).
  // Если они равны, это означает, что клик произошел непосредственно на оверлее, и вызывается функция onCloseModal, закрывающая модальное окно.

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
          <img className={s.image} src={largeImage} alt="big size image" />
        </div>
      </div>,
      modalRoot
    );
  }
}
