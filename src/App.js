import React, { Component } from "react";
import Demo from './pages/demo';
import Home from './pages/home';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <Demo />
          <Home />
        </div>
      </ReduxProvider>
    );
  }
}
export default App;