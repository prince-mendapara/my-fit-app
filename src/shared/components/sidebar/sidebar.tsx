import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'shared/interface/state';

const Sidebar: FC = () => {
	const user = useSelector((state: IState) => state.common.user);

	return (
		<div className='sidebar-container flex align-items--center justify-content--center m--10 p--15 border-radius--xxl'>
			<div className='sidebar height--full flex	 align-items--start width--full'>
				<div className='app-info flex flex--column align-items--center mb--20'>
					<p className='app-title text--center font--bold mb--20'>MyFit</p>
					<div className='user-image mb--20'>
						<img src={user.image} alt='user' />
					</div>
					<p className='user-name text--center text--white mb--20'>Hello Mr. {user.name}</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
