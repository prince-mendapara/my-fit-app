import { combineReducers } from 'redux';

import { IAction, IState } from 'shared/interface/state';

import CommonReducer from './commonReducer';

const appReducer = combineReducers({
	common: CommonReducer
});

const rootReducer = (state: IState | undefined, action: IAction) => {
	if (action.type === 'LOGOUT') {
		state = undefined;
	}
	return appReducer(state, action);
};

export default rootReducer;
