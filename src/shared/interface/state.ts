import { IActivity, IUser } from '.';

export interface IState {
	common: ICommonState;
}

export interface IAction {
	type: string;
	payload: any;
}

export interface ICommonState {
	user: IUser;
	activities: IActivity[];
	currentActivity: IActivity;
}
