import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './Routers/AppRouter';
import configureStore from './Store/configureStore';
import {addExpense} from './Actions/expenses';
import {setTextFilter} from './Actions/filters';
import getVisibleExpenses from './Selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({description: 'Water bill',amount:4500}));
store.dispatch(addExpense({description: 'Gas bill',createdAt:1000}));
store.dispatch(addExpense({description: 'Electricity bill',amount: 10500}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);

console.log(visibleExpenses);

const jsx =  (
    <Provider store = { store }>
    <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));