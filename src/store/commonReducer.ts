import { IAction, ICommonState } from 'shared/interface/state';
import * as actionTypes from './actionTypes';
import { IActivity, IUser } from 'shared/interface';

const initialState: ICommonState = {
	user: {} as IUser,
	activities: [],
	currentActivity: {} as IActivity
};

const reducer = (state: ICommonState = initialState, action: IAction) => {
	switch (action.type) {
		case actionTypes.USER_UPDATE:
			return {
				...state,
				user: action.payload
			};
		case actionTypes.ACTIVITIES_UPDATE:
			return {
				...state,
				activities: action.payload
			};
		case actionTypes.CURRENT_ACTIVITY_UPDATE:
			return {
				...state,
				currentActivity: action.payload
			};
		default:
			return { ...state };
	}
};

export default reducer;
