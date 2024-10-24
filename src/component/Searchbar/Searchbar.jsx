/* eslint-disable react/prop-types */
import { Component } from "react";
import Button from "../UI/Button/Button";
import s from "./Searchbar.module.css";

export default class Searchbar extends Component {
  state = {
    inputQuery: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const query = this.state.inputQuery.trim();

    if (query === "") {
      this.setState({ inputQuery: "" });
      return;
    }

    this.props.changeQuery(query);
    this.setState({ inputQuery: "" });
  };

  render() {
    const { buttonType } = this.props;
    return (
      <header className={s.wrapper}>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.inputQuery}
            onChange={(e) => this.setState({ inputQuery: e.target.value })}
          />
          <Button
            onClick={this.handleSubmit}
            label="Search"
            type={buttonType}
            className="buttonSearch"
          />
        </form>
      </header>
    );
  }
}
