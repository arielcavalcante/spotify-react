import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Faq, ListPlayList, PlayList, Signup } from './pages';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/faq' component={Faq} />
					<Route path='/signup' component={Signup} />
					<Route path='/playlists' component={ListPlayList} />
					<Route path='/:link' component={PlayList} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
