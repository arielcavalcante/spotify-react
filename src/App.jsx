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
	const user = useSelector(({user}) => user);
	return (
		<div className='App'>
			<Router>
				<Switch>
					{user ?
						(
							<>
							<Route path='/' exact component={Player} />
							<Route path='/search' exact component={Search} />
							<Route path='/faq' component={Faq} />
							<Route path='/playlists' component={Library} />
							<Route path='/:link' component={Playlist} />
              <Route path='/profile' component={Profile} />
							</>
						) : (
							<>
							<Route path='/' exact component={Home} />
							<Route path='/login' exact component={Login} />
							<Route path='/faq' component={Faq} />
							<Route path='/signup' component={Signup} />
							</>
						)
					}

				</Switch>
			</Router>
		</div>
	);
}

export default App;
