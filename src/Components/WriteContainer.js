import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Write from './Write';
import Footer from './Footer';
import './css/Main.css';

function WriteContainer ({userData, accessToken}){

    return (
        <div>
            <Write/>
            <Footer></Footer>
    </div>);
}



const mapStateToProps = (state) => ({
    userData : state.user.userData,
    accessToken : state.user.accessToken
});

export default connect(mapStateToProps)(WriteContainer);