import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    count: 0 
  }
  /* 자바스크립트의 주석과 같다 */
  plus = () => {
    this.setState(current => ({count: current.count +1}));
    console.log("plus");
  };
  minus = () => {
    this.setState(current => ({count: current.count -1}));
    console.log("minus");
  };
  render() {
    return (
    <div>
        <h1>Im a class Component {this.state.count}</h1>
        <button onClick={this.plus}>Plus</button> &nbsp;&nbsp;&nbsp;
        <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

export default App;
