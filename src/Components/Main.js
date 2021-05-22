import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Finder from './Finder';
import Footer from './Footer';
import Contents from './Contents';
import './css/Main.css';

function Main ({userData, accessToken}){

    return (
        <div>
            <Finder></Finder>
            <Contents></Contents>
            <Footer></Footer>
    </div>);
}



const mapStateToProps = (state) => ({
    userData : state.user.userData,
    accessToken : state.user.accessToken
});

export default connect(mapStateToProps)(Main);