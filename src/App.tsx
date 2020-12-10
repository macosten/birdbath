import React from 'react';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Link, Redirect, Route, Switch, useHistory, withRouter } from "react-router-dom";

import BirdbathNavbar from "./components/BirdbathNavbar";

import ListPage from "./jsnes/ListPage";
import RunPage from "./jsnes/RunPage";
import JavatariPage from "./javatari/JavatariPage";

import AboutPage from "./pages/AboutPage";

class UnwrappedRoutedApp extends React.Component<any, any> {
	render() { 
		return <div className="App">
				<BirdbathNavbar />
				<Switch>
					<Route exact path="/"></Route>
					<Route exact path="/about" component={AboutPage}/>
					<Route exact path="/javatari" component={JavatariPage}/>
					<Route exact path="/javatari/:romname" component={JavatariPage}/>
					<Route exact path="/jsnes" component={ListPage}/>
					<Route exact path="/jsnes/run/:slug" component={RunPage}/>
					<Route>
						<Redirect to="/" />
					</Route>
				</Switch>
			</div>

	}
}

export const RoutedApp = withRouter(UnwrappedRoutedApp);
export default RoutedApp;