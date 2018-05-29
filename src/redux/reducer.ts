import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { routerReducer, RouterState } from 'react-router-redux';
import RootReducer, { RootEpics, RootState } from '../modules/root/RootReducer';

const reducer = combineReducers<State>({
    router: routerReducer,
    index: RootState,
});

export class State {
    readonly router: RouterState = null;
    readonly root: RootState = new RootState();
}

export const epics = combineEpics(RootEpics);

export default reducer;
