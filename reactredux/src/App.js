import React, { Component } from "react";
import { Provider } from "react-redux";

import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import store from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Video />
          <Sidebar />
        </div>
      </Provider>
    );
  }
}
