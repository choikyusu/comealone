import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './css/Contents.css'
import Feed from './Feed';

function Contents ({userData, accessToken}){
    const list = [
        {
            id : 1,
            title : "익선동에서 나혼자",
            writer : "캐빈",
            imagePath : "../assets/images/template.jpg",
        },
        {
            id : 2,
            title : "회사에서 나혼자",
            writer : "규수",
            imagePath : "../assets/images/template.jpg",
        },
    ];

    return (
        <div className="body-container">
            <div className="home-wrapper">
                {
                    list.map(item => (
                        <Feed feed={item}/>
                    ))
                }
                 
            </div>
    </div>);
}



const mapStateToProps = (state) => ({
    userData : state.user.userData,
    accessToken : state.user.accessToken
});

export default connect(mapStateToProps)(Contents);