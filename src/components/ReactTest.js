import React, { Component } from "react";
import AddForm from "./AddForm";

export class ReactTest extends Component {
  state = {
    items: [
      { id: 1, name: "pen", price: 100 },
      { id: 2, name: "eraser", price: 200 },
    ],
  };

  add = ({ name, price }) => {
    let id = this.state.items.length + 1;

    this.setState({
      items: [...this.state.items, { id, name, price }],
    });
  };

  render() {
    return (
      <div>
        <h2>Hello Testing</h2>
        {this.state.items.map((item) => {
          return (
            <div key={item.id}>
              <p>
                Main Id : {item.id} {item.name} , {item.price}
              </p>
            </div>
          );
        })}
        <AddForm add={this.add} />
      </div>
    );
  }
}

export default ReactTest;
