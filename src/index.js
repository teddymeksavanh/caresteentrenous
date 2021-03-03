import React from 'react';
import { render } from 'react-snapshot';
import './App.scss';
import App from './App';
import AppFR from './Appfr';
import Privacy from './Privacy';
import Terms from './Terms';
import reportWebVitals from './reportWebVitals';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

const lang = window.navigator.language;

render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route path="/terms">
					<Terms />
				</Route>
				<Route path="/privacy">
					<Privacy />
				</Route>
				<Route path="/en" exact>
					<App />
				</Route>
				<Route path="/fr" exact>
					<AppFR />
				</Route>
				<Route path="/" exact>
					{/^en\b/.test(lang) ? <App /> : <AppFR />}
				</Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
