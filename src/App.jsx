import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
	Faq,
	Home,
	Login,
	Player,
	Library,
	Playlist,
	Profile,
	Search,
	Signup,
} from './pages';
import './assets/typography/Typography.css';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
	const user = useSelector(({ user }) => user);
	return (
		<div className='App'>
			<Router>
				{user ? (
					<Switch>
						<Route path='/' exact component={Player} />
						<Route path='/search' exact component={Search} />
						<Route path='/playlists' exact component={Library} />
						<Route path='/playlists/:link' component={Playlist} />
						<Route path='/profile' exact component={Profile} />
						<Route component={Player} />
					</Switch>
				) : (
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/login' exact component={Login} />
						<Route path='/faq' exact component={Faq} />
						<Route path='/signup' exact component={Signup} />
					</Switch>
				)}
			</Router>
		</div>
	);
}

export default App;
