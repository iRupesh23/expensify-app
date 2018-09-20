import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../Selectors/expenses';
import selectExpensesTotal from '../Selectors/expenses-total';

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesToal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesToal}</h1>
        </div>
    )
}

const mapStateToProps =(state)=>{
    const visibleExpenses = selectExpenses(state.expenses,state.filters);
    return {
        expenseCount : visibleExpenses.length,
        expensesTotal : selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);
