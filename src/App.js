import React from 'react';
import { Helmet } from "react-helmet";
import Homepage from './sharedHomepage';

function App() {
	return (
		<>
			<Helmet>
				<title>Kibu - Party Game for Friends</title>
				<meta property="og:url" content="https://www.kibugame.com/en" />
				<meta property="og:title" content="Kibu - Party Game for Friends" />
				<meta name="description" content="Kibu is a fun social game that deepens your relationships with friends, family, dates, colleagues, and even fun strangers. This game is filled with thought-provoking questions to start incredible conversations and keep them going. By asking the right questions, you’ll gain a better understanding of who your friends are and what makes them tick." />
				<meta property="og:description" content="Kibu is a fun social game that deepens your relationships with friends, family, dates, colleagues, and even fun strangers. This game is filled with thought-provoking questions to start incredible conversations and keep them going. By asking the right questions, you’ll gain a better understanding of who your friends are and what makes them tick." />
				<meta property="og:image" content="https://www.kibugame.com/en.png" />
				<meta name="apple-itunes-app" content="app-id=1543589401, app-argument='https://apps.apple.com/fr/app/kibu-fun-convos-with-friends/id1543589401?l=en'" />
			</Helmet>
			<Homepage lang="en" />
		</>
	);
}

export default App;
