import React, { Component } from 'react';
import MainNavigation from './components/layout/MainNavigation';
import MainContainer from './components/layout/MainContainer';

class App extends Component {

	render() {
		return (
			<div className="App">
				<div className="AppContainer">
					<MainNavigation />
					<MainContainer />
				</div>
			</div>
		);
	}
}

export default App;
