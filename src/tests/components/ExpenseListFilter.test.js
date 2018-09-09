import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate,wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter = {setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount = {sortByAmount}
            setStartDate = {setStartDate}
            setEndDate = { setEndDate}
        />
    );
}); 

test('should render ExpenseListFilters correctly', ()=> {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', ()=> {
    wrapper.setProps({
        filters:altFilters 
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', ()=>{
    var value = 'Rent';
    wrapper.find('input').simulate('change',{
        target : { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
}); 

test('should sort by date',()=>{
    var value = 'date';
    wrapper.setProps({
        filters:altFilters 
    });
    wrapper.find('select').simulate('change', {
        target : { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by Amount', () =>{
    var value = 'amount';
    wrapper.setProps({
        filters:altFilters 
    });
    wrapper.find('select').simulate('change', {
        target : { value }
    });
    expect(sortByAmount).toHaveBeenCalled();

});

// test('should handle date changes', ()=>{
//     const startDate = moment(0).add(4,'years');
//     const endDate = moment(0).add(8,'years');
//     wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
//     expect(setStartDate).toHaveBeenLastCalledWith(startDate);
//     expect(setStartDate).toHaveBeenLastCalledWith(end);

// }); 

// test('should handle data focus change', ()=>{
//     const calenderFocused = 'endDate';
//     wrapper.find('DateRangePicker').props('onFocusChange')(calenderFocused);
//     expect(wrapper.set('calenderFocused')).toBe(calenderFocused);
// });