import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeContext, themes} from './components/theme-context';
import registerServiceWorker from './registerServiceWorker';

let data = 'hello';

class Renders extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // The entire state is passed to the provider
    return (
      <ThemeContext.Provider value={this.state}>
        <App {...this.props} />
        <ThemeTogglerButton  />
      </ThemeContext.Provider>
    );
  }
}

ReactDOM.render(<Renders message={data}/>, document.getElementById('root'));
registerServiceWorker();

setTimeout(function () {
  data = 'hello world';
  ReactDOM.render(<Renders message={data}/>, document.getElementById('root'));
}, 1000)

function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}
