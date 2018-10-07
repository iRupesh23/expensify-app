import {login, logout } from '../../Actions/auth';

test('should setup login action object with uid', ()=>{
    const uid = 'rupesh230007';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should setup logout action object', ()=>{
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});