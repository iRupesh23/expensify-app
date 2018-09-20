import getExpensesTotal from '../../Selectors/expenses-total';
import expenses from '../fixtures/expense';

test('should return 0 if no expenses', ()=>{
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});
test('should correctly add up single expense', ()=>{
    const result = getExpensesTotal([expenses[0]]); 
    expect(result).toEqual(195);
});

test('should correctly add up multiple expense', ()=>{
    const result = getExpensesTotal(expenses); 
    expect(result).toEqual(114195);
});