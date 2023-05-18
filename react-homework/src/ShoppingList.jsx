/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Ingredient from "./Ingredient";
import Input from "./Input";

class ShoppingList extends Component {
  state = {
    shoppingList: [
      { name: "Mince", bought: false },
      { name: "Onions", bought: false },
      { name: "Garlic", bought: true },
      { name: "Beans", bought: false },
    ],
  };

  handleAddIngredient = (newItem) => {
    this.setState((prevState) => ({
      shoppingList: [...prevState.shoppingList, newItem],
    }));
  };

  handleDeleteItem = (index) => {
    this.setState((prevState) => {
      const updatedList = prevState.shoppingList.filter(
        (item, i) => i !== index
      );
      return { shoppingList: updatedList };
    });
  };

  render() {
    const { shoppingList } = this.state;
    return (
      <section>
        <Input
          shoppingList={shoppingList}
          onAddIngredient={this.handleAddIngredient}
        />
        <ul>
          {shoppingList.map((item, index) => (
            <Ingredient
              index={index}
              name={item.name}
              bought={item.bought}
              key={index}
              onDeleteItem={this.handleDeleteItem}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default ShoppingList;
