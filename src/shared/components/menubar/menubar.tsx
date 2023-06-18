import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from 'store/actionTypes';

import { IState } from 'shared/interface/state';
import { createAction } from 'shared/util/utility';
import { IActivity } from 'shared/interface';
import { useNavigate } from 'react-router';

const Menubar: FC = () => {
	const activities = useSelector((state: IState) => state.common.activities);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const updateCurrentActivity = useCallback(
		(item: IActivity) => {
			dispatch(createAction(actionTypes.CURRENT_ACTIVITY_UPDATE, item));
			navigate(`activity/${item.name}`);
		},
		[dispatch, navigate]
	);
	return (
		<div className='menubar-container flex align-items--center justify-content--center m--10 p--15 border-radius--xxl'>
			<div className='menubar height--full flex flex--column width--full'>
				<div className='menu-list'>
					<p
						className='menu-item mb--10 font-size--lg cursor--pointer font--semi-bold'
						onClick={() => navigate('/dashboard')}
					>
						Dashboard
					</p>
					<p className='menu-item mb--10 font-size--lg font--semi-bold'>Activities</p>
					<div className='sub-menu-list'>
						{activities.map((item) => {
							return (
								<p
									key={item.id}
									className='menu-sub-item mb--10 cursor--pointer'
									onClick={() => updateCurrentActivity(item as IActivity)}
								>
									&#x27A4; {item.name}
								</p>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menubar;
