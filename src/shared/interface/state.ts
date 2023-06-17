export interface IState {
	common: ICommonState;
}

export interface IAction {
	type: string;
	payload: any;
}

export interface ICommonState {
	loading: boolean;
}
