/* eslint-disable react/prop-types */
import { Component } from "react";
import IconBox from "../IconBox/IconBox";
import s from "./Button.module.css";

export default class Button extends Component {
  render() {
    const { onClick, label, type, className, icon } = this.props;

    return (
      <button
        className={`${s.button} ${className}`}
        type={type || "button"}
        onClick={onClick}
      >
        {icon && <IconBox id={icon} />}
        {label}
      </button>
    );
  }
}
