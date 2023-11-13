import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer } from "./Reducer";
import initial_state from "./InitialState";

const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log("prev state", store.getState());
    console.log("action", action);
    result = next(action);
    console.log("Next state", store.getState());
    console.groupEnd();
}

const saver = store => next => action => {
    let result = next(action);
    localStorage['menu'] = JSON.stringify(store.getState());
    return result;
}

const storeFactory = (initialState=initial_state) => 
    applyMiddleware(logger, saver)(createStore)(
        reducer,
        (localStorage['menu']) ?
            JSON.parse(localStorage['menu']) : initial_state 
    );

export default storeFactory;