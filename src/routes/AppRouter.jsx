import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
	return (
		<Router>
			<Header />

			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />

				<Route path='/' component={NotFound} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
