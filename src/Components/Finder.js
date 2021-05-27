import React, {Component, useState} from 'react';
import styles from './css/Finder.css'
import Modal from './Modals/Filter';
import {connect} from 'react-redux';
import * as filterActions from '../_reducers/filter_reducer'



function Finder ({userData, accessToken, eat1, enjoy1}){
    
    const [modalOpen, setModalOpen] = useState(false);

    const openModal=()=>{
        setModalOpen(true);
    }

    const closeModal=()=>{
        setModalOpen(false);
    }

    const applyModal=()=>{
        alert(eat1);
        setModalOpen(false);
        
    }

    function handleFilterClick(e){
        setModalOpen(true);
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
        <Modal open={ modalOpen } close={ closeModal } apply={ applyModal } header="필터">
            
        </Modal>
    </div>);
}

const mapStateToProps = (state) => ({
    eat1 : state.filter.filter.eat,
    enjoy1 : state.filter.filter.enjoy

});


export default connect(mapStateToProps)(Finder);