import React from 'react';
import withRouter from './withRouter';
import Sidebar from 'shared/components/sidebar/sidebar';
import Menubar from 'shared/components/menubar/menubar';

const Layout: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<div className='app-main-wrapper'>
			<Sidebar />
			<div className='app-main-content m--10 scrollbar--hidden'>{props.children}</div>
			<Menubar />
		</div>
	);
};

export default withRouter(Layout);
