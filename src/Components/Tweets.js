import React from 'react';
import { Timeline } from 'react-twitter-widgets';

export const Tweets = ({ className, id }) => (
	<div id={id} className={className}>
		<Timeline
			dataSource={{
				sourceType: 'list',
				ownerScreenName: 'jakkTwoKays',
				slug: 'work-traffic-weather',
			}}
			options={{
				chrome: 'noheader , nofooter , noborders , noscrollbar ',
				linkColor: '#E81C4F',
				ariaPolite: 'assertive',
				theme: 'dark',
			}}
			onLoad={() => console.log('Timeline is loaded!')}
		/>
	</div>
);
