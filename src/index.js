import {createStore} from "redux";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        default:
            return state;
    }
};

const store = createStore(reducer);
// Receive notification of changes
store.subscribe(() => {
    console.log(store.getState());
});

// Process new action
store.dispatch({type: 'INC'});