import authReducer from '../../Reducers/auth';

test('should return uid when login',()=>{
    const action = ({
        type: 'LOGIN',
        uid: 'rupesh123213'
    });
    const state = authReducer({},action);
    expect(state.uid).toBe(action.uid);
});

// test('should return uid when logout',()=>{
//     const action = ({
//         type: 'LOGOUT'
//     });
//     const state = authReducer({uid:'newuuid'},action);
//     expect(state).toBe({});
// });