import React, { Component } from 'react';
import { Tweets } from './Components/Tweets';
import MapApis from './Components/CustomMap';
import { Button } from './Components/Button';
import '../src/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		// this.toggleClick = this.toggleClick.bind(this);
		this.state = {
			isHidden: false,
			toggleClasses: 'invisible',
		};
	}

	
	toggleClick = e => {
		console.log('clicked');
		let css = this.state.toggleClasses === 'visible' ? 'invisible' : 'visible';
		this.setState(state => ({
			isHidden: !state.isHidden,
			toggleClasses: css,
		}));
	};

	render() {
		console.log(this.state);
		return (
			<div className='App'>
				<MapApis />
				<Tweets className={this.state.toggleClasses} id='tweets' />
				<Button
					id='toggler'
					text='Toggle Me Baby'
					type='button'
					onClick={this.toggleClick.bind(this)}
				/>
			</div>
		);
	}
}

export default App;
