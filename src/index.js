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
		{/^en\b/.test(lang) ?
			<HelmetProvider>
				<Helmet>
					<title>Kibu - Fun Convos With Friends</title>
					<meta property="og:description" content="Kibu is a fun social game that deepens your relationships with friends, family, dates, colleagues, and even fun strangers. This game is filled with questions to start incredible conversations and keep them going. By asking the right questions, you’ll gain a better understanding of who your friends are and what makes them tick." />
					<meta property="og:image" content="./logoen.png" />
				</Helmet>
			</HelmetProvider> :
			<HelmetProvider>
				<Helmet>
					<title>Kibu - Ça Reste Entre Nous‪®</title>
					<meta property="og:description" content="Kibu - Ça Reste Entre Nous®️ est un jeu social amusant qui approfondit vos relations avec vos amis, votre famille, vos 'dates', vos collègues et même des inconnus amusants. 
					Ce jeu est truffé de questions qui permettent d'entamer et de poursuivre des conversations incroyables. En posant les bonnes questions, vous comprendrez mieux qui sont vos amis et ce qui les motive." />
					<meta property="og:image" content="./logofr.png" />
				</Helmet>
			</HelmetProvider>
		}
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
