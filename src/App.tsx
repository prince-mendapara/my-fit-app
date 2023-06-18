import React, { useCallback, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from 'hoc/layout';
import Dashboard from 'features/dashboard/container/home';
import Activity from 'features/activity/container/activity';
import { useDispatch } from 'react-redux';
import { createAction } from 'shared/util/utility';
import * as actionTypes from 'store/actionTypes';
import * as data from './shared/data.json';

const App: React.FC = () => {
	const dispatch = useDispatch();

	const updateData = useCallback(() => {
		const dummyData = data;
		dispatch(createAction(actionTypes.USER_UPDATE, dummyData.user));
		dispatch(createAction(actionTypes.ACTIVITIES_UPDATE, dummyData.activities));
	}, [dispatch]);

	useEffect(() => {
		updateData();
	});

	return (
		<Layout>
			<Routes>
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/activity/:type' element={<Activity />} />
				<Route path='*' element={<Navigate replace to='/dashboard' />} />
			</Routes>
		</Layout>
	);
};

export default App;
