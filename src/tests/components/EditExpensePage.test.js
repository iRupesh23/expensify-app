import React from 'react';
import { shallow } from  'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expense from '../fixtures/expense';

let editExpense, history, wrapper,startRemoveExpense;
beforeEach(()=>{
    editExpense = jest.fn();
    history = {push : jest.fn()};
    startRemoveExpense = jest.fn();
    wrapper = shallow (<EditExpensePage 
        editExpense={editExpense} 
        history={history} 
        startRemoveExpense={startRemoveExpense}
        expense = {expense[0]}
        />);
   
});

test('should render EditExpensePage correctly', () =>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle EditExpense', ()=> {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense[0]);
    expect(history.push).toHaveBeenLastCalledWith('/'); 
    expect(editExpense).toHaveBeenLastCalledWith(expense[0].id,expense[0]); 
 });

 test('should handle startRemoveExpense', ()=> {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/'); 
    expect(startRemoveExpense).toHaveBeenLastCalledWith(
        expense[0].id
    );  
 });