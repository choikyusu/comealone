import React, {Component, useState, useEffect} from 'react';
import styles from './css/Finder.css'
import Modal from './Modals/Filter';
import {connect} from 'react-redux';
import * as filterActions from '../_reducers/filter_reducer'



function Finder ({userData, accessToken, filterEat, filterEnjoy, filterFavorite, filterWrite, filterWatch}){
    
    const [modalOpen, setModalOpen] = useState(false);

    const openModal=()=>{
        setModalOpen(true);
    }

    const closeModal=()=>{
        setModalOpen(false);
    }

    const applyModal=()=>{
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
                <button className="filter-item" hidden={!filterEat} > 
                            <a className="filter-keyword" > 
                                <div class="filter-tit">먹을거리</div> 
                            </a> 
                </button>
                <button className="filter-item" hidden={!filterEnjoy}> 
                            <a className="filter-keyword" > 
                                <div class="filter-tit">할거리</div> 
                            </a> 
                </button>
                <button className="filter-item" hidden={!filterFavorite}>  
                            <a className="filter-keyword" > 
                                <div class="filter-tit">찜한거</div> 
                            </a> 
                </button>
                <button className="filter-item" hidden={!filterWrite}> 
                            <a className="filter-keyword" > 
                                <div class="filter-tit">내가쓴</div> 
                            </a> 
                </button>
                <button className="filter-item" hidden={!filterWatch}> 
                            <a className="filter-keyword" > 
                                <div class="filter-tit">볼거리</div> 
                            </a> 
                </button>
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
    filterEat : state.filter.filter.eat,
    filterEnjoy : state.filter.filter.enjoy,
    filterFavorite : state.filter.filter.favorite,
    filterWrite : state.filter.filter.write,
    filterWatch : state.filter.filter.watch,
});


export default connect(mapStateToProps)(Finder);