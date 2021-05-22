import React from 'react';

import {connect} from 'react-redux';
import Main from '../Components/Main';


function Auth({isLogin, history}){
    
    if (!isLogin){
        history.push('/login');
    }

    return (<Main/>);
}

const mapStateToProps = (state) => ({
    isLogin : state.user.isLogin,
});

export default connect(mapStateToProps)(Auth);