import React, { Component } from 'react';
import Tweets from './Components/Tweets';
import MapApis from './Components/CustomMap';
import '../src/App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<MapApis/>
				<Tweets/>
			</div>
		);
	}
}

export default App;
