import { Component } from "react";
import s from "./IconBox.module.css";
import spriteCross from "./../../../assets/spriteCross.svg";

export default class IconBox extends Component {
  render() {
    return (
      <div className={s.iconBox_wrapper}>
        <svg className={s.iconSvg} width="32" height="32">
          <use className={s.iconUse} href={`${spriteCross}#iconcross`}></use>
        </svg>
      </div>
    );
  }
}
