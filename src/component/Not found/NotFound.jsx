/* eslint-disable react/prop-types */
import { Component } from "react";
import NoImagesError from "./../../images/Klopp_Street_art.webp";
import s from "./NotFound.module.css";

export default class NotFound extends Component {
  render() {
    const { query } = this.props;
    // console.log("Received query in NotFound:", query);
    return (
      <div className={s.noImagesWrapper}>
        <h1 className={s.noImagesErrorTitle}>
          Sorry for that, <br />
          but <span className={s.noSpan}>NO</span> images for <br />
          <span className={s.noSpanYellow}>"{query.toUpperCase()}"</span>
          <br />
          are found
          <br />
          the same as the trophies <br />
          for "Man Und"
        </h1>
        <img
          className={s.noImagesError}
          src={NoImagesError}
          alt="error: no images"
        />
      </div>
    );
  }
}
