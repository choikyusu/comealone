import React, {useEffect} from 'react';
import NaverLogin from '../NaverLogin';
import { auth } from '../_actions/user_action';

import {connect} from 'react-redux';
import Dashboard from '../Dashboard/Dashboard';




function Auth({isLogin, history}){
    
    if (!isLogin){
        history.push('/login');
    }

    return (<Dashboard/>);
}

const mapStateToProps = (state) => ({
    isLogin : state.user.isLogin,
});

export default connect(mapStateToProps)(Auth);