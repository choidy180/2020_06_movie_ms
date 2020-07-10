import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component{
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0 
  }
  /* 플러스 */
  plus = () => {
    this.setState(current => ({count: current.count +1}));
    console.log("plus");
  };
  /* 마이너스 */
  minus = () => {
    this.setState(current => ({count: current.count -1}));
    console.log("minus");
  };
  componentDidMount() {
    console.log("component render");
  }

  componentDidUpdate(){
    /* 업데이트 되면 실행되는 함수 */
    console.log("I just updated");
  }
  componentWillUnmount(){
    console.log("Goodbye, cruel world");
  }
  /* 리엑트 컴포넌스에서 사용하는 유일한 함수 render */
  render() {
    console.log("I'm rendering");
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
