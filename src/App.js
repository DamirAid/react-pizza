
import React from 'react';
import AllRoutes from './AllRoutes';
import Header from './components/Header/Header'

import './App.less'
import './assets/scss/app.scss'
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Header />
				<div className="content">
					<AllRoutes />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;