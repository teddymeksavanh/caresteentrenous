import React from 'react';
import { Helmet } from "react-helmet";
import Homepage from './sharedHomepage';

function App() {
	return (
		<>
			<Helmet>
				<title>Kibu - Card Game for Friends & more</title>
				<meta property="og:url" content="https://www.kibugame.com/en" />
				<meta property="og:title" content="Kibu - Card Game for Friends & more" />
				<meta name="description" content="How well do you really know your friends? And how much do they really know about you? Kibu is an audio-based card game that deepens your relationships with friends, dates, and even strangers." />
				<meta property="og:description" content="How well do you really know your friends? And how much do they really know about you? Kibu is an audio-based card game that deepens your relationships with friends, dates, and even strangers." />
				<meta property="og:image" content="https://www.kibugame.com/en.png" />
				<meta name="apple-itunes-app" content="app-id=1543589401, app-argument='https://apps.apple.com/fr/app/kibu-fun-convos-with-friends/id1543589401?l=en'" />
			</Helmet>
			<Homepage lang="en" />
		</>
	);
}

export default App;
