import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Privacy from './Privacy';
import Terms from './Terms';
import reportWebVitals from './reportWebVitals';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const lang = window.navigator.language;

ReactDOM.render(
	<>
		<React.StrictMode>
			<Router>
				<Switch>
					<Route path="/terms">
						<Terms />
					</Route>
					<Route path="/privacy">
						<Privacy />
					</Route>
					<Route path="/en">
						<App lang="en" />
					</Route>
					<Route path="/fr">
						<App lang="fr" />
					</Route>
					<Route path="/">
						<App lang={/^en\b/.test(lang) ? 'en' : 'fr'} />
					</Route>
				</Switch>
			</Router>
		</React.StrictMode></>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
