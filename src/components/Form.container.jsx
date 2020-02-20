import React, { Component } from "react";

class Form extends Component {
  state = {
    test: ""
  };

  handleChangeTest = e => {
    console.log(e.target.name);
    console.log(this.state[e.target.name]);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form>
        <input name="test" onChange={this.handleChangeTest} />
        {this.state.test}
      </form>
    );
  }
}

export default Form;
