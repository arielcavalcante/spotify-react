import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Faq, Home, Login, Player, Library, Playlist, Signup } from './pages';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/login' exact component={Login} />
					{/* <Route path='/search' exact component={Search} />} /> */}
					<Route path='/player' exact component={Player} />
					<Route path='/faq' component={Faq} />
					<Route path='/signup' component={Signup} />
					<Route path='/playlists' component={Library} />
					<Route path='/:link' component={Playlist} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
