import { IAction, ICommonState } from 'shared/interface/state';
import * as actionTypes from './actionTypes';

const initialState: ICommonState = {
	loading: false
};

const reducer = (state: ICommonState = initialState, action: IAction) => {
	switch (action.type) {
		case actionTypes.LOADING_START:
			return {
				...state,
				loading: action.payload
			};
		case actionTypes.LOADING_FINISH:
			return {
				...state,
				playersLoading: true
			};
		default:
			return { ...state };
	}
};

export default reducer;
