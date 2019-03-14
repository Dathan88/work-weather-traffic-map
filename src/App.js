import React, { Component } from 'react';
import MapApis from './Components/MapApis';
import '../src/App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Work Weather App</h1>
          <MapApis/>
				</header>
			</div>
		);
	}
}

export default App;
