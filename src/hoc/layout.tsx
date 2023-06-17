import React from 'react';
import withRouter from './withRouter';
import Sidebar from 'shared/components/sidebar/sidebar';

const Layout: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<div className='app-main-wrapper'>
			<Sidebar />
			<div className='app-main-content'>{props.children}</div>
		</div>
	);
};

export default withRouter(Layout);
