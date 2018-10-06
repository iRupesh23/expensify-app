import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    startAddExpense, 
    addExpense, 
    editExpense, 
    startEditExpense,
    removeExpense, 
    startRemoveExpense,
    setExpenses, 
    startSetExpenses} from '../../actions/expenses';
import expenses from '../fixtures/expense';
import database from '../../firebase/firebase';


const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
    const expensesData ={};
    expenses.forEach(({ id, description, note, amount, createdAt })=>{
        expensesData[id] = { description, note, amount, createdAt }
    });
    database.ref('expenses').set(expensesData).then(()=> done());
});


test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should remove expense from firebase', (done)=>{
    const store = createMockStore({});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(()=>{
        const action = store.getActions();
        expect(action[0]).toEqual({
            type : 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('should setup edit expenses action object', () => {
    const action = editExpense('123abc', {note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates:{
            note: 'New note value'
        }
    });
});

test('should edit expense in firebase', (done)=>{
    const store = createMockStore({});
    const id = expenses[2].id;
    const updates = {amount : 4000};
    store.dispatch(startEditExpense(id, updates)).then(()=>{
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapShot)=>{
        expect(snapShot.val().amount).toBe(updates.amount);
        done();
    });
});

test('should setup add expenses action object with given values', () => {
 
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done)=>{
    const store = createMockStore({});
    const expenseData = {
        description : "Mouse",
        amount : 3000,
        note : 'This one is better',
        createdAt : 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type : 'ADD_EXPENSE',
            expense : {
                id : expect.any(String),
                ...expenseData
            }
        });

       return database.ref(`expenses/${actions[0].expense.id}`).once('value');

    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });;
});

test('should add expense with default to database and store', (done)=>{
    const store = createMockStore({});
    const expenseDefault = {
        description : '',
        note : '', 
        amount : 0 , 
        createdAt : 0 
    }
    store.dispatch(startAddExpense(expenseDefault)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type : 'ADD_EXPENSE',
            expense : {
                id : expect.any(String),
                ...expenseDefault
            }
        });

       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
             
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    });;
});

test('should setup set expense action object with data',()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});

test('should fetch the expenses from the firebase',(done)=>{
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        });
    });

    done();

});
