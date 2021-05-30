import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Map from './Map';
import Footer from './Footer';
import './css/Main.css';

function Main ({userData, accessToken}){

    return (
        <div>
            <Map/>
            <Footer></Footer>
    </div>);
}



const mapStateToProps = (state) => ({
    userData : state.user.userData,
    accessToken : state.user.accessToken
});

export default connect(mapStateToProps)(Main);