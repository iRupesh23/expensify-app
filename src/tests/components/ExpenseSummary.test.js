import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';


test('should correctly render ExpenseSummary with 1 expense', ()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with multiple expenses', ()=>{
    const wrapper = shallow(<ExpenseSummary expenseCount={5} expensesTotal={2352323232.543}/>);
    expect(wrapper).toMatchSnapshot();
});