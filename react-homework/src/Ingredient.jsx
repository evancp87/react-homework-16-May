import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./App.module.css";
import { TiDelete } from "react-icons/ti";

class Ingredient extends Component {
  state = {
    bought: this.props.bought,
    name: this.props.name,
    onDeleteItem: this.props.onDeleteItem,
    index: this.props.index,
  };

  handleToggleDone = () => {
    this.setState((prevState) => ({ bought: !prevState.bought }));
  };

  onDeleteItem = () => {
    const { index, onDeleteItem } = this.state;

    return onDeleteItem(index);
  };

  render() {
    const { bought, name } = this.state;

    return (
      <div className={styles.itemContainer}>
        <li
          onClick={this.handleToggleDone}
          className={bought ? styles.done : styles.toBuy}
        >
          {name}
          <span>
            <TiDelete onClick={this.onDeleteItem} />
          </span>
        </li>
      </div>
    );
  }
}

Ingredient.propTypes = {
  bought: PropTypes.bool,
  name: PropTypes.string,
};

export default Ingredient;
