import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Timeline } from 'react-twitter-widgets';

export default class Tweets extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Timeline
				dataSource={{
					sourceType: 'list',
					ownerScreenName: 'jakkTwoKays',
					slug: 'work-traffic-weather',
				}}
				options={{
					height: '300',
					width: '300',
					chrome: 'noheader , nofooter , noborders , noscrollbar ',
					linkColor: '#E81C4F',
					ariaPolite: 'assertive',
				}}
				onLoad={() => console.log('Timeline is loaded!')}
			/>
		);
	}
}

/* 
const Twit = require('twit');
const T = new Twit({
	consumer_key: 'REACT_APP_TWITTER_API ',
	consumer_secret: 'REACT_APP_TWITTER_SECRET_API ',
	access_token: 'REACT_APP_TWITTER_ACCESS_TOKEN',
	access_token_secret: 'REACT_APP_TWITTER_SECRET_ACCESS_TOKEN ',
});

const workArea = ['-112.12', '40.22', '-111.58', '40.78'];
const stream = T.stream('statuses/filter', {
	locations: workArea,
	track: ['FR', 'UTA', 'I-15', 'TRAX'],
	lang: 'en',
});

stream.on('tweet', tweet => {
	console.log(tweet);
}); 



*/
