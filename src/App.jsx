import { Component } from "react";
import "./App.css";
import Searchbar from "./component/Searchbar/Searchbar";
import ImageGallery from "./component/ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    query: "",
    buttonType: "submit",
  };

  changeQuery = (input) => {
    this.setState({ query: input });
  };

  render() {
    return (
      <div className="">
        <Searchbar
          changeQuery={this.changeQuery}
          buttonType={this.state.buttonType}
        />

        <ImageGallery
          imageQuery={this.state.query}
          buttonType={this.state.buttonType}
        />
      </div>
    );
  }
}
