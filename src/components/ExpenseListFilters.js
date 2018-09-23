import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {setTextFilter,sortByDate , sortByAmount, setStartDate, setEndDate } from '../Actions/filters';

export class ExpenseListFilters extends React.Component {

    state ={ 
        calenderFocused : null
    };

    onDateChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calenderFocused) => {
        this.setState(()=> ({ calenderFocused }));
    };

    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value);
    };

    onSortChange =(e)=>{
        if(e.target.value==='date'){
                this.props.sortByDate();
        }
        else{
            this.props.sortByAmount();
        }
};

    render() {
        return (
            <div>
            <input type='text' value={this.props.filters.text} 
            onChange={this.onTextChange}/>
            <select value={this.props.filters.sortBy} 
                onChange={this.onSortChange}>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
            </select>

            <DateRangePicker
                startDate = {this.props.filters.startDate}
                endDate = {this.props.filters.endDate}
                onDatesChange={this.onDateChange}
                focusedInput = {this.state.calenderFocused}
                onFocusChange = {this.onFocusChange}
                showClearDates = {true}
                numberOfMonths = {1}
                isOutsideRange = {()=>false}
                startDateId = "DatePickerFilterStartDateId"
                endDateId = "DatePickerFilterEndDateId"
            />
        </div>

        );
    }

}


const mapStateToProps =(state) => ({
    filters:state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter : (text)=> dispatch(setTextFilter(text)),
    sortByDate : () => dispatch(sortByDate()),
    sortByAmount : () => dispatch(sortByAmount()),
    setStartDate : (startDate) => dispatch(setStartDate(startDate)),
    setEndDate : (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);