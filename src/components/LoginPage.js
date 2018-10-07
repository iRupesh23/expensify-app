import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../Actions/auth';

export const LoginPage = ({ startLogin })=> (
    <div>
        <p>This is a login page</p>
        <button onClick={startLogin}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin : () => dispatch(startLogin())
});

export default connect(undefined,mapDispatchToProps)(LoginPage);

