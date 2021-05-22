import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './css/Footer.css'

function Footer ({userData, accessToken}){

    return (
    <div className="footer">
        <div className = "images-container">
            <div className="img-container">
                <img className ="img" src={require("./write.png").default}/>
                <br/>
                Write
            </div>
            <div className="img-container">
                <img className ="img" src={require("./write.png").default}/>
                <br/>
                Write
            </div>
            <div className="img-container">
                <img className ="img" src={require("./write.png").default}/>
                <br/>
                Write
            </div>
            <div className="img-container">
                <img className ="img" src={require("./write.png").default}/>
                <br/>
                Write
            </div>
            <div className="img-container">
                <img className ="img" src={require("./write.png").default}/>
                <br/>
                Write
            </div>
        </div>
    </div>);
}




export default Footer;