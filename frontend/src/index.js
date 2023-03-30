import React from "react";
import * as ReactDOMClient from "react-dom/client";
import ReactDOM from 'react-dom';
import './/index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { render } from 'react-dom';


const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <>
    <Provider store={store}>
      < App/>
    </Provider>
  </>
  
  );


/*
//"react-redux": "^8.0.5",
//"react-router-dom": "^6.9.0",
//"redux": "^4.2.1"
// "css-loader": "^6.7.3",
// "@redux-devtools/core": "^3.13.1",
//"@reduxjs/toolkit": "^1.9.3",
*/