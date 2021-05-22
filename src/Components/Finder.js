import React, {Component} from 'react';
import styles from './css/Finder.css'

function Finder ({userData, accessToken}){

    return (
    <div className="header-container">
        <div className="header-section">
            <div className="search-box-wrapper">
                <div className="search-box-search-btn">
                    <img src={require("../assets/images/search.svg").default } alt="search"/>
                </div>
                <div className="search-box-query-box">
                    <input type="text" className="search-query" placeholder="검색해보세요.">

                    </input>
                </div>
            </div>

        </div>
    </div>);
}




export default Finder;