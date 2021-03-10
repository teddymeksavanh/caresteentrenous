import React from 'react';
import { Helmet } from "react-helmet";
import Homepage from './sharedHomepage';

function AppFR() {
	return (
		<>
            <Helmet>
                <title>Kibu - Ça Reste Entre Nous‪®</title>
                <meta property="og:url" content="https://www.kibugame.com/fr" />
                <meta property="og:title" content="Kibu - Ça Reste Entre Nous‪®" />
                <meta name="description" content="Kibu - Ça Reste Entre Nous®️ est un jeu social amusant qui approfondit vos relations avec vos amis, votre famille, vos 'dates', vos collègues et même des inconnus amusants. 
                    Ce jeu est truffé de questions qui permettent d'entamer et de poursuivre des conversations incroyables. En posant les bonnes questions, vous comprendrez mieux qui sont vos amis et ce qui les motive." />
                <meta property="og:description" content="Kibu - Ça Reste Entre Nous®️ est un jeu social amusant qui approfondit vos relations avec vos amis, votre famille, vos 'dates', vos collègues et même des inconnus amusants. 
                    Ce jeu est truffé de questions qui permettent d'entamer et de poursuivre des conversations incroyables. En posant les bonnes questions, vous comprendrez mieux qui sont vos amis et ce qui les motive." />
                <meta property="og:image" content="https://www.kibugame.com/fr.png" />
				<meta name="apple-itunes-app" content="app-id=1543589401, app-argument='https://apps.apple.com/fr/app/kibu-fun-convos-with-friends/id1543589401?l=fr'" />
            </Helmet>
			<Homepage lang="fr" />
		</>
	);
}

export default AppFR;
