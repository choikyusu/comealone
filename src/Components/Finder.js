import React, {Component} from 'react';
import styles from './css/Finder.css'

function Finder ({userData, accessToken}){
    
    function handleFilterClick(e){
        alert('필터팝업 노출');
    }
    
    return (
    <div className="header-container">
        <div className="header-section">
            <div className="filter-wrapper">
            <img src={require("../assets/images/filter.png").default } alt="search" className="filter" onClick={handleFilterClick}/>
            </div>
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