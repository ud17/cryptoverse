import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";

import store from "./app/store";
import "antd/dist/antd.min.css";

// react v.18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // this enables the navigation among our view of various components in ReactApplication
  // allows changing browser url and keeping the ui in sync with the url change
  <Router>
    {/* wrapping the App Component inside of Provider means every single component of App will have
      access to the store variable */}
    <Provider store={store}>      
      <App />
    </Provider>
  </Router>
);
