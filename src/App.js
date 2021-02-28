import React, { useState } from 'react';
import i18n from './i18n.json';
import { Link } from "react-router-dom";
import './App.scss';
import { Helmet } from "react-helmet";

function App({ lang }) {
	const [toggle, setToggle] = useState(false);
	const handleToggle = () => setToggle(!toggle);
	const body = document.getElementById('kibu-body');
	body.classList.remove('body-fr-otherpage');
	if (lang === 'fr') {
		body.classList.add('body-fr');
	}
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
			</Helmet>
			<section className="home h-100">
				<div className="container fixed-top px-0 mt-3">
					<nav className="navbar navbar-expand-lg navbar-light">
						<a className="navbar-brand" href="/">
							<div className="vertical-align">
								<img src="/logo.png" height="40" className="logo" alt="logo" />
								<h5 className="text-uppercase mb-0 title">Kibu</h5>
							</div>
						</a>
						<button className="navbar-toggler kibu-toggler" onClick={() => handleToggle()} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<img src="/menu.png" width="30" alt="menu" />
						</button>
						{toggle && <div className="kibu-navbar-collapse">
							<ul>
								<li>
									<Link className="empty-a" to="/terms">
										{i18n.privacy[lang] || 'Privacy policy'}
									</Link>
								</li>
								<li>
									<Link className="empty-a" to="/privacy">
										{i18n.terms[lang] || 'Terms of use'}
									</Link>
								</li>
								<li>
									<a className="empty-a" href="mailto:support@kibugame.com">Contact</a>
								</li>
								<li>
									<a className="empty-a" href={lang === 'fr' ? 'https://apps.apple.com/fr/app/kibu-fun-convos-with-friends/id1543589401?l=fr' : 'https://apps.apple.com/fr/app/kibu-fun-convos-with-friends/id1543589401?l=en'} target="_blank" rel="noreferrer">{lang === 'fr' ? 'Note' : 'Rate'} Kibu ⭐</a>

								</li>
							</ul>
						</div>}
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<Link className="nav-link" to="/terms">
										{i18n.privacy[lang] || 'Privacy policy'}
									</Link>
								</li>
								<li className={`nav-item ${lang === 'fr' ? 'mx-1' : 'mx-4'}`}>
									<Link className="nav-link" to="/privacy">
										{i18n.terms[lang] || 'Terms of use'}
									</Link>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="mailto:support@kibugame.com">Contact</a>
								</li>
								<li className={`nav-item ${lang === 'fr' ? 'ml-2' : 'ml-5'}`}>
									<a className="nav-link" href="https://www.facebook.com/gaming/kibugame/" target="_blank" rel="noreferrer noopener">
										<img src="/Facebook.png" height="20" alt="facebook" />
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="https://www.instagram.com/kibu_game/" target="_blank" rel="noreferrer noopener">
										<img src="/Instagram.png" height="20" alt="instagram" />
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="https://www.tiktok.com/@kibugame" target="_blank" rel="noreferrer noopener">
										<img src="/Union.png" height="20" alt="union" />
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<div className="container h-100">
					<span className="d-none d-md-block footer-copyright">Copyright © 2020 TJBKG consulting OÜ. All Rights Reserved.</span>
					<div className="row h-100">
						<div className="col-lg-6 col-md-6 vertical-align" id="body-fr-col">
							<div>
								<h5 className="text-uppercase mb-4 text-white-semi font-light kibu-toptext">
									{i18n.kibuToptext[lang] || "KEEP IT BETWEEN US"}
								</h5>
								<h1 className="text-uppercase header-title">
									{i18n.headerTitle[lang] || "HAVE FUN WITH YOUR CREW 🤗 & MAKE NEW FRIENDS"}
								</h1>
								<h5 className="text-white my-4 font-light kibu-subtext">
									{i18n.kibuSubtext[lang] || "This game is filled with thought-provoking questions to start incredible conversations with friends, family, dates, and even fun strangers"}
								</h5>
								<div className="d-flex">
									<a href={lang === 'fr' ? 'https://apps.apple.com/fr/app/kibu-fun-convos-with-friends/id1543589401?l=fr' : 'https://apps.apple.com/fr/app/kibu-fun-convos-with-friends/id1543589401?l=en'} className="vertical-align btn-app mr-2 btn-app-apple" target="_blank" rel="noreferrer">
										<img src="/Apple.png" alt="apple" className="mr-2 btn-apple-img" />
										<div>
											<span className="btn-app-subtitle">Download on the</span>
											<h3 className="btn-app-title">App Store</h3>
										</div>
									</a>
									<a href='https://play.google.com/store/apps/details?id=com.tjbkgconsulting.kibu' className="vertical-align btn-app btn-app-google" target="_blank" rel="noreferrer">
										<img src="/Google.png" alt="apple" className="mr-2 btn-google-img" />
										<div>
											<span className="btn-app-subtitle">GET IT ON</span>
											<h3 className="btn-app-title">Google Play</h3>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-img-mob d-block d-sm-block d-md-none">
							<img src={lang === 'fr' ? `/GroupFrMOB.png` : `/GroupMOB.png`} className="img-fluid" alt="group Mob" />
						</div>
						<div className="col-lg-6 col-md-6 d-block d-sm-block d-md-none">
							<div className="text-center">
								<a href="https://www.facebook.com/gaming/kibugame/" target="_blank" rel="noreferrer noopener">
									<img src="/Facebook.png" height="20" alt="facebook" />
								</a>
								<a href="https://www.instagram.com/kibu_game/" target="_blank" rel="noreferrer noopener" className="mx-4">
									<img src="/Instagram.png" height="20" alt="instagram" />
								</a>
								<a href="https://www.tiktok.com/@kibugame" target="_blank" rel="noreferrer noopener">
									<img src="/Union.png" height="20" alt="union" />
								</a>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 d-block d-sm-block d-md-none">
							<span className="footer-copyright-mob">Copyright © 2020 TJBKG consulting OÜ. All Rights Reserved.</span>
						</div>
					</div>
				</div>
				<img src={lang === 'fr' ? `/GroupFr.png` : `/Group.png`} className="img-fluid right-img-position" alt="group" />
				<div className="bg-blue"></div>
			</section>
		</>
	);
}

export default App;
