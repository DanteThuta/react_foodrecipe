import React, { Component } from "react";

export class AddForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();

  add = () => {
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    this.props.add(name, price);
  };
  render() {
    return (
      <div>
        <label>Name </label>
        <input type="text" ref={this.nameRef}></input>
        <label>Price </label>
        <input type="text" ref={this.priceRef}></input>
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

export default AddForm;
