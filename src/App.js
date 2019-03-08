import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Home from './components/Home';
import store from './redux/store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div id="main" className="layout-row flex">
					<div id="content" className="flex">
						<Home />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
