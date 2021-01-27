import React, { Component } from "react";
import Main from "./components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./redux/configureStore";
// import jwtDecode from "jwt-decode";

// const token = localStorage.FBIdtoken;
// if (token) {
//   const decodedToken = jwtDecode(token);
// }
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container-fluid p-0">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
