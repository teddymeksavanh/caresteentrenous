import './Otherpage.scss';

function Privacy() {
	document.getElementById('kibu-body').classList.add('body-fr-otherpage');
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col">
					<h1>Kibu - Terms of Use</h1>
					
					<p>You can subscribe for this app to get access to premium features and unlimited content.</p>

					<p>Subscription options can be: 1-week with a 3-day trial, 1-month, 1-year.</p>

					<p>All prices are subject to change without notification. We occasionally run promotion prices as incentives or limited time opportunities for qualifying purchases made during the promotional time period. Due to the time sensitive and promotional nature of these events, we are unable to offer price protection or retroactive discounts or refunds for previous purchases in the event of a price reduction or promotional offering.</p>

					<p>Payment will be charged to iTunes or Playstore Account at confirmation of purchase.</p>

					<p>Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period.</p>

					<p>Account will be charged for renewal within 24-hours prior to the end of the current period at the cost of the chosen package.</p>

					<p>Subscriptions may be managed by the user and auto-renewal may be turned off by going to the user's iTunes or Playstore Account Settings after purchase.</p>

					<p>No cancellation of the current subscription is allowed during active subscription period.</p>

					<p>You may cancel a subscription during its free trial period via the subscription setting through your iTunes or Playstore account. This must be done 24 hours before the end of the subscription period to avoid being charged. Please visit <a href="https://support.apple.com/en-us/HT202039" target="_blank" rel="noreferrer noopener">iTunes Support</a> or <a href="https://support.google.com/googleplay/answer/7018481?hl=en&co=GENIE.Platform%3DAndroid" target="_blank" rel="noreferrer noopener">Playstore Support</a> for more information.</p>

					<p>You may turn off the auto-renewal of your subscription via your iTunes or Playstore Account Settings. However, you are not able to cancel the current subscription during its active period.</p>

					<p>Any unused portion of a free trial period, if offered, will be forfeited when the user purchases a subscription to that publication, where applicable.</p>
				</div>
			</div>
		</div>
	)
}

export default Privacy;