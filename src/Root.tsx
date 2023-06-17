import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import store from './store';

import 'assets/styles/app.scss';

const Root: React.FC = (props) => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<App {...props} />
			</BrowserRouter>
		</Provider>
	);
};

export default Root;
