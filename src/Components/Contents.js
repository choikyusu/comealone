import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function Dashboard ({userData, accessToken}){

    return (
    <div>
        <div>{userData ? userData.nickname : ""}님 반갑습니다.</div>
        <div>{accessToken ? accessToken.accessToken : ""}</div>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
        1<br/>
    </div>);
}



const mapStateToProps = (state) => ({
    userData : state.user.userData,
    accessToken : state.user.accessToken
});

export default connect(mapStateToProps)(Dashboard);