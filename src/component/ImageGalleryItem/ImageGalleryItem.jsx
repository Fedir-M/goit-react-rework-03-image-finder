/* eslint-disable react/prop-types */
import { Component } from "react";

import s from "./ImageGalleryItem.module.css";

export default class ImageGalleryItem extends Component {
  handleClick = (largeImage) => {
    this.props.openModal();
    this.props.getModalImage(largeImage);
  };

  render() {
    const { itemRef, images } = this.props;

    return (
      <>
        {images.map(({ id, webformatURL, largeImageURL }, idx, arr) => (
          <li
            key={id}
            className={s.item}
            ref={arr.length - 12 === idx ? itemRef : null}
            onClick={() => this.handleClick(largeImageURL)}
          >
            <img key={id} src={webformatURL} alt="" />
          </li>
        ))}
      </>
    );
  }
}
