import {createStore,combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from  './../Reducers/expenses';
import filterReducer from './../Reducers/filters';
import authReducer from '../Reducers/auth';

//store creation 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {

    const store = createStore(
        combineReducers({
            expenses : expensesReducer,
            filters : filterReducer,
            auth: authReducer
        }),

        composeEnhancers(applyMiddleware(thunk))
       // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;

};


