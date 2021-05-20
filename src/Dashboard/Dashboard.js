import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function Dashboard ({userData}){

    return (<div>{userData.nickname}님 반갑습니다.</div>);
}



const mapStateToProps = (state) => ({
    userData : state.user.userData,
});

export default connect(mapStateToProps)(Dashboard);