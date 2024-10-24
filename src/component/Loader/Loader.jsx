import { Component } from "react";
import s from "./Loader.module.css";

export default class Loader extends Component {
  render() {
    return (
      <div className={s.loader}>
        <span className={s.loaderName}></span>
      </div>
    );
  }
}
