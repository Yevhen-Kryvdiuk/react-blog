import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigator from '../navigator';
import './App.css';
import { LatestPostsPage, PostPage } from '../pages';

function App() {
	return (
		<div className="App">
			<Navigator />
			<Switch>
				<Route path="/" component={LatestPostsPage} exact />
				<Route path="/posts/:id" component={PostPage} />
			</Switch>
		</div>
	);
}

export default App;
