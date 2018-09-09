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

const jsx =  (
    <Provider store = { store }>
    <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));