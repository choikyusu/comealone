import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './css/Contents.css'
import Feed from './Feed';

function Dashboard ({userData, accessToken}){

    return (
        <div className="body-container">
            <div className="home-wrapper">
                 <Feed></Feed>
                 <Feed></Feed>
                 <Feed></Feed>
                 <Feed></Feed>
                 <Feed></Feed>
                 <Feed></Feed>
                 <Feed></Feed>
                 <Feed></Feed>
                 <Feed></Feed>
                 <Feed></Feed>
                 <Feed></Feed>
                 <Feed></Feed>
                 <Feed></Feed>
            </div>
    </div>);
}



const mapStateToProps = (state) => ({
    userData : state.user.userData,
    accessToken : state.user.accessToken
});

export default connect(mapStateToProps)(Dashboard);