/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  state = {
    shoppingList: this.props.shoppingList,
  };

  input = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ input: e.target.value });
    console.log(this.state);
  };

  handleAddIngredient = () => {
    const { input } = this.state;
    const newItem = { name: input, bought: false };
    this.props.onAddIngredient(newItem);
    this.setState({ input: " " });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleAddIngredient();
  };

  render() {
    // const { shoppingList } = this.state;
    console.log(this.state);
    console.log("The new list is:", this.state.shoppingList);

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.input} />
        <button type="button" onClick={this.handleAddIngredient}>
          Add
        </button>
      </form>
    );
  }
}

Input.propTypes = {
  shoppingList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      bought: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Input;
