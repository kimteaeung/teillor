import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './container/Main';

import './scss/style.scss'
const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Main} />
			</Switch>
		</Router>
	);
}

export default App;