import {createStore,combineReducers} from 'redux';
import expensesReducer from  './../Reducers/expenses';
import filterReducer from './../Reducers/filters';

//store creation 

export default () => {

    const store = createStore(
        combineReducers({
            expenses : expensesReducer,
            filters : filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;

};


