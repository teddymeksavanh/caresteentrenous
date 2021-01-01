import React, { useState } from 'react';
import i18n from './i18n.json';
import './App.scss';

function App({lang}) {
	const [toggle, setToggle] = useState(false);
	const handleToggle = () => setToggle(!toggle);
  	return (
		<section className="home h-100">
			<div className="container fixed-top px-0 mt-3">
				<nav className="navbar navbar-expand-lg navbar-light">
					<a className="navbar-brand" href="/">
						<div className="vertical-align">
							<img src="/logo.png" height="40" className="mr-3 logo" alt="logo" />
							<h5 className="text-uppercase mb-0 title">Kibu</h5>
						</div>
					</a>
					<button className="navbar-toggler kibu-toggler" onClick={() => handleToggle()} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<img src="/menu.png" width="30" alt="menu" />
					</button>
					{ toggle && <div className="kibu-navbar-collapse">
						<ul>
							<li>
								<a className="empty-a" href="https://www.notion.so/Kibu-Privacy-Policy-e6f6b73824b84e3a9a14fe5cea205443" target="_blank" rel="noreferrer noopener">
									{ i18n.privacy[lang] || 'Privacy policy' }
								</a>
							</li>
							<li>
								<a className="empty-a" href="https://www.notion.so/Kibu-Terms-of-Use-1dfb72d1d5d4470788cbb0d3d9938adc" target="_blank" rel="noreferrer noopener">
									{ i18n.terms[lang] || 'Terms of use' }
								</a>
							</li>
							<li>
								Contact
							</li>
							<li>
								Rate Kibu ⭐
							</li>
						</ul>
					</div> }
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<a className="nav-link" href="https://www.notion.so/Kibu-Privacy-Policy-e6f6b73824b84e3a9a14fe5cea205443" target="_blank" rel="noreferrer noopener">
									{ i18n.privacy[lang] || 'Privacy policy' }
								</a>
							</li>
							<li className="nav-item mx-4">
								<a className="nav-link" href="https://www.notion.so/Kibu-Terms-of-Use-1dfb72d1d5d4470788cbb0d3d9938adc" target="_blank" rel="noreferrer noopener">
									{ i18n.terms[lang] || 'Terms of use' }
								</a>
							</li>
							<li className="nav-item">
								<span className="nav-link" >Contact</span>
							</li>
							<li className="nav-item ml-5">
								<a className="nav-link" href="/">
									<img src="/Facebook.png" height="20" alt="facebook" />
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									<img src="/Instagram.png" height="20" alt="instagram" />
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									<img src="/Union.png" height="20" alt="union" />
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<div className="container h-100">
				{/* <div className="row mt-3 navbar-row">
					<div className="col">
						<div className="d-flex">
							<div className="navbar-left mr-auto">
								<div className="vertical-align">
									<img src="/logo.png" height="40" className="mr-3 logo" alt="logo" />
									<h5 className="text-uppercase mb-0 title">Kibu</h5>
								</div>
							</div>
							<div className="navbar-right">
								<img src="/Facebook.png" height="20" className="mr-4" alt="facebook" />
								<img src="/Instagram.png" height="20" className="mr-4" alt="instagram" />
								<img src="/Union.png" height="20" alt="union" />
							</div>
						</div>
					</div>
				</div> */}
				<span className="d-none d-md-block footer-copyright">Copyright © 2020 TJBKG consulting OÜ. All Rights Reserved.</span>

				<div className="row h-100">
					<div className="col-lg-6 col-md-6 vertical-align">
						<div>
							<h5 className="text-uppercase mb-4 text-white-semi font-light kibu-toptext">
								{ i18n.kibuToptext[lang] || "LET'S KEEP IT BETWEEN US" }
							</h5>
							<h1 className="text-uppercase header-title">
								{ i18n.headerTitle[lang] || "HAVE FUN WITH YOUR CREW 🤗🍺 & MAKE NEW FRIENDS" }
							</h1>
							<h5 className="text-white my-4 font-light kibu-subtext">
								{ i18n.kibuSubtext[lang] || "No more boredom, we bring the fun" }
								<br/>
								{ i18n.kibuSubtext2[lang] || "with this new relationship party game!" }
							</h5>
							<div className="d-flex">
								<a href="/" className="vertical-align btn-app mr-4 btn-app-apple">
									<img src="/Apple.png" alt="apple" className="mr-3 btn-apple-img" />
									<div>
										<span className="btn-app-subtitle">Download on the</span>
										<h3 className="btn-app-title mb-0">App Store</h3>
									</div>
								</a>
								<a href="/" className="vertical-align btn-app google-app btn-app-google">
									<img src="/Google.png" alt="google" className="mr-3 btn-google-img" />
									<div>
										<span className="btn-app-subtitle text-uppercase">Get it On</span>
										<h3 className="btn-app-title google-app-title">Google Play</h3>
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
							<a href="/">
								<img src="/Facebook.png" height="20" alt="facebook" />
							</a>
							<a href="/" className="mx-4">
								<img src="/Instagram.png" height="20" alt="instagram" />
							</a>
							<a href="/">
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
  	);
}

export default App;