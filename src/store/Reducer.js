/*
    state = {
        items: [], - array of obj -> id, name, quantity, price
        total_cost: 0 - int
    }

    action = {
        type: ,
        obj: {} with id, name, quantity, price
    }
*/
import { types } from './ActionTypes';

export const reducer = (state = {}, action) => {
    let nextState = {...state};
    switch(action.type){
        case types.ADD_TO_CART:
            nextState.total_cost += action.obj.price;
            nextState.items.push(action.obj);
            break;
        case types.REMOVE_FROM_CART:
            nextState.total_cost -= action.obj.price * action.obj.quantity;
            nextState.items = nextState.items.filter(item => item.id != action.obj.id);
            break; 
        case types.INCREMENT_QUANTITY:
            nextState.total_cost += action.obj.price;
            nextState.items = nextState.items.map(item => {
                if (item.id === action.obj.id)
                    (item.quantity)++
                return item;
            });
            break;
        case types.DECREMENT_QUANTITY:
            nextState.total_cost -= action.obj.price;
            nextState.items = nextState.items.map(item => {
                if (item.id === action.obj.id)
                    (item.quantity)--;
                return item;
            });
            break;
        default:
            console.log("Something went wrong in reducer");
            break;
    }
    return nextState;
}