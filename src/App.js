import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // The constructor is called before it is mounted
  constructor(props) {
    super(props);
  }

  // 在组件实例化或者接收到新的props之后调用
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    console.log(prevState);
    return false;
  }

  // componentWillMount()
  // NSAFE_componentWillMount() {}
  componentDidMount() {}

  // updating
  /*componentWillReceiveProps() / UNSAFE_componentWillReceiveProps()
  static getDerivedStateFromProps()
  shouldComponentUpdate()
  componentWillUpdate() / UNSAFE_componentWillUpdate()
  render()
  getSnapshotBeforeUpdate()
  componentDidUpdate()*/

  // Unmounting
  componentWillUnmount() {}

  /*componentDidCatch()*/
  // render() method is required.
  render() {
    const { message } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">{message}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
