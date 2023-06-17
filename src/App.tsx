import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from 'hoc/layout';
import Dashboard from 'features/dashboard/container/home';

const App: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='*' element={<Navigate replace to='/dashboard' />} />
			</Routes>
		</Layout>
	);
};

export default App;
