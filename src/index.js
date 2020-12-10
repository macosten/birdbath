import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { theme, GlobalStyle } from './layout.js';
import reportWebVitals from './reportWebVitals';

import { RoutedApp } from "./App";

import { BrowserRouter as Router, withRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";

class App extends React.Component {
	render() {
		return <ThemeProvider theme={theme}>
			<GlobalStyle/>
			<RoutedApp />
		</ThemeProvider>
	}

}

ReactDOM.render(
    <React.StrictMode>
  		<Router>
   			<App />
  		</Router>
  	</React.StrictMode>,
  	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
