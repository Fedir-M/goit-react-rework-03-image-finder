/* eslint-disable react/prop-types */
import { Component, createRef } from "react";
import ImageGalleryItem from "./../ImageGalleryItem/ImageGalleryItem";
import Button from "./../UI/Button/Button";
import Modal from "./../Modal/Modal";
import { ProgressBar } from "react-loader-spinner";
import { fetchImages } from "../../services/imagesApi";

import s from "./ImageGallery.module.css";

export default class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    largeImage: "",
    isOpenModal: false,
    isLoading: false,
  };

  itemRef = createRef(null);

  static getDerivedStateFromProps(currentProps, prevState) {
    if (prevState.query !== currentProps.query) {
      return { query: currentProps.query, page: 1 };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { imageQuery } = this.props;
    const { page, images } = this.state;
    //* записал изначально в строку 18 и сидел час ебался

    if (prevProps.imageQuery !== imageQuery && imageQuery !== "") {
      this.setState({ images: [], page: 1 }, () => {
        this.getImages(imageQuery);
      });
    }
    if (prevState.page !== page) {
      this.getImages(imageQuery);
    }
    if (prevState.images !== images) {
      this.itemRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  getImages(query) {
    const { page } = this.state;

    this.setState({ isLoading: true });

    fetchImages(query, page)
      .then((images) => {
        this.setState((prev) => ({ images: [...prev.images, ...images] }));
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  onLoadMore = () => {
    this.setState((prev) => ({
      page: prev.page + 1,
    }));
  };

  openModal = () => {
    this.setState({ isOpenModal: true });
  };

  getModalImage = (largeImageURL) => {
    this.setState({ largeImage: largeImageURL });
  };

  closeModal = () => {
    this.setState({ isOpenModal: false, largeImage: "" });
  };

  render() {
    // console.log(this.props.imageQuery); //напоминалка как правильно в классе вызывать консоль
    const { isLoading, images, isOpenModal, largeImage } = this.state;
    return (
      <div className={s.container}>
        {isLoading && (
          <ProgressBar
            visible={true}
            height="80"
            width="150"
            ariaLabel="progress-bar-loading"
            barColor="#7fcddb"
            borderColor="#227f8e"
            className={s.loader}
            wrapperClass={s.customProgressBar}
          />
        )}

        {isOpenModal && (
          <Modal largeImage={largeImage} onCloseModal={this.closeModal} />
        )}

        <ul className={s.wrapper}>
          <ImageGalleryItem
            itemRef={this.itemRef}
            images={this.state.images}
            openModal={this.openModal}
            getModalImage={this.getModalImage}
          />
        </ul>

        {!isLoading && images.length > 0 && (
          <Button
            onClick={this.onLoadMore} // на пропс онКлик (кот. мы определили внутри самого компонента) передается метод смены страницы
            label="Load more"
            type="button"
            className="loadMoreButton"
          />
        )}
      </div>
    );
  }
}
