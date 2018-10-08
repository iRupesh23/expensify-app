import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../Actions/auth';

export const LoginPage = ({ startLogin })=> (
    <div className='box-layout'>
    <div className='box-layout__box'>
        <h1 className='layout__title'>Expensify</h1>
        <p>Its time to monitor your expenses and control it.</p>
    <button className='button' onClick={startLogin}>Login with Google</button>
    </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin : () => dispatch(startLogin())
});

export default connect(undefined,mapDispatchToProps)(LoginPage);

