import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './css/Footer.css'

function Footer ({userData, accessToken}){

    function handleWriteClick(e){
        alert("글쓰기");
    }

    function handleMapClick(e){
        alert("지도");
    }

    function handleListClick(e){
        alert("리스트");
    }

    function handleFavoriteClick(e){
        alert("즐겨찾기");
    }

    function handlePreferenceClick(e){
        alert("환경설정");
    }

    return (
    <div className="footer">
        <div className = "images-container">
            <div className="img-container">
                <img className ="img" src={require("./write.png").default} onClick={handleWriteClick} />
                <br/>
                글쓰기
            </div>
            <div className="img-container">
                <img className ="img" src={require("./write.png").default } onClick={handleMapClick} />
                <br/>
                지도
            </div>
            <div className="img-container">
                <img className ="img" src={require("./write.png").default} onClick={handleListClick} />
                <br/>
                리스트
            </div>
            <div className="img-container">
                <img className ="img" src={require("./write.png").default} onClick={handleFavoriteClick} />
                <br/>
                즐겨찾기
            </div>
            <div className="img-container">
                <img className ="img" src={require("./write.png").default} onClick={handlePreferenceClick} />
                <br/>
                설정
            </div>
        </div>
    </div>);
}




export default Footer;