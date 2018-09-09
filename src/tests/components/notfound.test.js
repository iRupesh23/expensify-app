import {shallow} from 'enzyme';
import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';

test('should render NotFound Page correctly', ()=>{
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});