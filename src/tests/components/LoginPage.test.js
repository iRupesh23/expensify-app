import {shallow} from 'enzyme';
import React from 'react';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage correctly', ()=>{
    const wrapper = shallow(<LoginPage startLogin={()=>{ }}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click',()=>{
    var startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find('button').simulate('click');
    
    expect(startLogin).toHaveBeenCalled(); 

});