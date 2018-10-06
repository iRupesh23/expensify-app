import uuid from 'uuid';
import database from '../firebase/firebase';

// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// With async action implemented below are the new steps
// Component calls action generator
// action generator returns funciton
// component dispatches function (?)
// function runs (has ability to dispatch other actions and do whatever it wants)


// ADD_EXPENSES - action generator

export const addExpense = (expense) => ({
    type : 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {})=>{
    return (dispatch) =>{   
        const {
            description  = '',
            note = '', 
            amount = 0 , 
            createdAt = 0 
        } = expenseData;

        const expense = {
            description, note, amount, createdAt
        };

        return database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    }
};


// REMOVE_EXPENSES

export const removeExpense = ({id}={}) =>({
    type : 'REMOVE_EXPENSE',
    id 
});

export const startRemoveExpense = ({id}={})=>{
    return (dispatch)=>{
        return database.ref(`expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id}));  
        });
             
    }
};

// EDIT_EXPENSES

export const editExpense = (id,updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense =(id, updates)=>{
    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(updates).then(() =>{
            dispatch(editExpense(id,updates));
        });
    }
};

// SET_EXPENSES
export const setExpenses=(expenses)=>({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = ()=>{
    return (dispatch)=>{
        return database.ref('expenses').once('value').then((snapshot)=>{
            const expenses = [];
            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id : childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setExpenses(expenses));
        });
    }
};
