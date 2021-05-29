import React, {Component, useEffect} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter,Link,Route, useHistory } from 'react-router-dom';
import styles from './css/Preference.css'
import * as userAction from '../_reducers/user_reducer';
import {useDispatch} from 'react-redux';
import _ from 'lodash';


function Preference ({userData, accessToken}){
    const dispatch = useDispatch();
    const history = useHistory();
    const clickLogout = (e) =>{
        dispatch(
            userAction.logout()
        );
    }

    useEffect(() =>{

        if (_.isEqual(userData,{}) && _.isEqual(accessToken,{}))
        {
            alert('로그아웃 되었습니다.');
            history.push("/");
        }

    },[userData, accessToken]);

    
    const {email, gender, nickname, profile_image} = userData;
    return (
        <div className="body-container">
            <div className="home-wrapper">
                <div className="user_profile">
                    <span className="wrap_thumb">
                        <img className = "img-profile" src={profile_image}/>
                    </span>
                </div>
                <div className="user_name">
                    {nickname}
                </div>
                <div className="wrap_button">
                    <button className="logout-button" onClick={e=>clickLogout(e)}>
                        로그아웃
                    </button>
                </div>
                <div className="wrap_button">
                    <button className="withdrawal-button">
                        회원탈퇴
                    </button>
                </div>
            </div>
    </div>
    );
}


const mapStateToProps = (state) => ({
    userData : state.user.userData,
    accessToken : state.user.accessToken
});

const mapDispatchToProps = (dispatch) => ({
    logout : () => dispatch(userAction.logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Preference);