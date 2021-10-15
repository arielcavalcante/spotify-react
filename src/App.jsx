import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Faq, PlaylistCollection, Playlist, Signup } from './pages';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/faq' component={Faq} />
					<Route path='/signup' component={Signup} />
					<Route path='/playlists' component={PlaylistCollection} />
					<Route path='/:link' component={Playlist} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
