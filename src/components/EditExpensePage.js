import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startRemoveExpense } from '../Actions/expenses';
import { startEditExpense } from '../Actions/expenses';

export class EditExpensePage extends React.Component {
    
    onSubmit = (expense)=>{
        console.log('string updated',expense);
        this.props.startEditExpense(this.props.expense.id,expense);
        this.props.history.push('/');
    };

    onRemove = (e)=> {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/');
    };
    
    render () {
        return (
            <div>
            <ExpenseForm 
                expense = {this.props.expense}
                onSubmit={this.onSubmit}
            />
    
            <button onClick={this.onRemove}>Remove</button>
            
            </div>
        );
    };
}

const mapStateToProps = (state,props) => {
    return {
        expense : state.expenses.find((expense)=>expense.id ===props.match.params.id)
    }; 
}

const mapDispatchToProps = (dispatch,props)=> ({ 
    startEditExpense : (id,expense) => dispatch(startEditExpense(id,expense)),
    startRemoveExpense : (id) =>dispatch(startRemoveExpense({id}))
});

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);