import React, { Component } from 'react';
import Item from './components/Item';
import Repeat from './components/Repeat';
import Refs from './components/Refs';
import FileInput from './components/FileInput';
import './App.css';

const components = {
  item: Item
};

class App extends Component {
  // 1.Mounting

  // The constructor is called before it is mounted
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * 在组件实例化或者接收到新的props之后调用, return 新的state merge进原先的state。
   * 访问不到this
   * this.setState() 后不会被触发
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    console.log(prevState);
    if(nextProps.message === prevState.message) {
      return null;
    }
    return {
      message: nextProps.message
    }
  }

  /**
   * 被componentDidMount代替。
   * render之前触发，调用setState()不会触发re-render， 不过建议在constructor里面进行初始化state
   * 异步请求什么之类的在这里请求还是会触发re-render，所以放在componentDidMount里面请求
   */
  // componentWillMount() / UNSAFE_componentWillMount()

  /**
   *  a good place to instantiate the network request
   *  a good place to set up any subscriptions(订阅). If you do that, don’t forget to unsubscribe in componentWillUnmount()
   */
  componentDidMount() {}

  // 2.Updating

  /**
   * 被getDerivedStateFromProps代替
   */
  // componentWillReceiveProps() / UNSAFE_componentWillReceiveProps()

  /**
   * 1.Returning false does not prevent child components from re-rendering when their state changes.
   * 2.return false时，UNSAFE_componentWillUpdate(), render(), and componentDidUpdate() 不会被触发
   * 3.We do not recommend doing deep equality checks or using JSON.stringify() in shouldComponentUpdate().
   *   It is very inefficient and will harm performance.
   * 4.React.PureComponent实现了prop和state的浅比较
   */
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  /**
   * componentDidUpdate。
   * 使用此作为发生更新之前做一些准备的机会
   * 不能call this.setState() 或 dispatch a Redux action
   * 它会在UNSAFE_componentWillUpdate()返回之前触发一个React组件的更新。
   */
  // componentWillUpdate(nextProps, nextState) / UNSAFE_componentWillUpdate()

  /**
   *  It enables your component to capture current values (e.g. scroll position) before they are potentially changed
   *  Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate().
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

  /**
   * 在更新发生后立即调用
   * Use this as an opportunity to operate on the DOM when the component has been updated.
   * a good place to do network requests
   */
  componentDidUpdate(prevProps, prevState, snapshot) {}

  // 3.Unmounting

  /**
   * Perform any necessary cleanup in this method,
   * such as invalidating timers (取消定时器), canceling network requests(取消网络请求),
   * or cleaning up any subscriptions(取消任何订阅) that were created in componentDidMount().
   */
  componentWillUnmount() {}

  /**
   * 错误处理
   * catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.
   * 调用setState()来进行渲染 错误时的UI
   */
  componentDidCatch() {}

  // render() method is required.
  render() {
    const { message } = this.state;
    let type = 'item';
    const SpecificItem = components[type];
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            <li className="App-title">{message}</li>
            {/*使用组件的几种形式*/}
            <Item/>
            <Item message={message}/>
            <SpecificItem message={message}/>
            <components.item message={message}/>
            {todos.map((t) => <Item key={t} message={t} />)}
          </ul>
          <Repeat numTimes={10}>
            {(index) => <div key={index}>This is item {index} in the list</div>}
          </Repeat>
        </header>
        <div className="App-intro">
          <Refs/>
          <FileInput />
        </div>
      </div>
    );
  }
}

export default App;
