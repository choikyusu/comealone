import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './css/Footer.css'
import { Link } from "react-router-dom";


function Footer ({userData, accessToken}){
    const menus = [
        { name: "글쓰기", path: "/write" },
        { name: "지도", path: "/map" },
        { name: "리스트", path: "/" },
        { name: "즐겨찾기", path: "/favorite" },
        { name: "설정", path: "/preference" }
      ];

    

    return (
    <div className="footer">
        <div className = "images-container">
            <div className="img-container">
                <Link to="/write" key={1}>
                    <img className ="img" src={require("./write.png").default}  />
                    <br/>
                    글쓰기
                </Link>
            </div>
            <div className="img-container">
                <Link to="/map" key={1}>
                    <img className ="img" src={require("./write.png").default }  />
                    <br/>
                    지도
                </Link>
            </div>
            <div className="img-container">
                <Link to="/list" key={1}>
                    <img className ="img" src={require("./write.png").default}  />
                    <br/>
                    리스트
                </Link>
            </div>
            <div className="img-container">
                <Link to="/favorite" key={1}>
                    <img className ="img" src={require("./write.png").default}  />
                    <br/>
                    즐겨찾기
                </Link>
            </div>
            <div className="img-container">
                <Link to="/preference" key={1}>
                    <img className ="img" src={require("./write.png").default}  />
                    <br/>
                    설정
                </Link>
            </div>
        </div>
    </div>);
}




export default Footer;