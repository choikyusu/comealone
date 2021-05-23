import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './css/Contents.css'

function Dashboard ({userData, accessToken}){

    return (
        <div className="body-container">
            <div className="home-wrapper">
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
            </div>
    </div>);
}



const mapStateToProps = (state) => ({
    userData : state.user.userData,
    accessToken : state.user.accessToken
});

export default connect(mapStateToProps)(Dashboard);