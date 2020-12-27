import { IAction } from "./action";
import { AppEvents } from "./events";

const initState: IState = {
    name: "",
    age: 123
};

export interface IState {
    name: string;
    age: number;
}

export const reducer = (state: IState = initState, action: IAction): IState => {
    switch (action.type) {
        case AppEvents.SET_NAME:
            return {...state, name: action.payload};
        case AppEvents.SET_AGE:
            return {...state, age: action.payload};
        default:
            return state;
    }
};