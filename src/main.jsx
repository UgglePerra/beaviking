import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./store/store";
import './index.css'
import App from './App.jsx'
import "./comps/navbar/navbar.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);

//createRoot(document.getElementById('root')).render(
  //<StrictMode>
  //  <App />
 // </StrictMode>,
//)
