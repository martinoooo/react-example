import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let data = 'hello';

ReactDOM.render(<App message={data}/>, document.getElementById('root'));
registerServiceWorker();

setTimeout(function () {
  data = 'hello world';
  ReactDOM.render(<App message={data}/>, document.getElementById('root'));
}, 1000)
