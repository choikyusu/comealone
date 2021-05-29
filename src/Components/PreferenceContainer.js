import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Preference from './Preference';
import Footer from './Footer';
import './css/Main.css';

function Main ({userData, accessToken}){

    return (
        <div>
            <Preference/>
            <Footer></Footer>
    </div>);
}



const mapStateToProps = (state) => ({
    userData : state.user.userData,
    accessToken : state.user.accessToken
});

export default connect(mapStateToProps)(Main);