import {createStore } from 'redux';

import { configureStore} from '@reduxjs/toolkit';

import authReducer from './auth-slice';
import counterReducer from './counter-slice';


// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'increment'){
//         return {
//             ...state,
//             counter: state.counter + 1
//         }
//     }
//     if(action.type === 'decrement'){
//         return {
//             showToggle: state.showToggle,
//             counter: state.counter - 1
//         }
//     }
//     if(action.type === 'increase'){
//         return {
//             showToggle: state.showToggle,
//             counter: state.counter + action.payload
//         }
//     }
//     if(action.type === 'toggle'){
//         return {
//             showToggle: !state.showToggle,
//             counter: state.counter
//         }
//     }
//     return state;
// }






// const store = createStore(counterReducer);

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})

export default store;

