import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
 
const PrivateRoute = ({ component: Component, isLogin, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (!isLogin){
                return <Redirect to="/login" />;
            }
            else{
                return <Component {...props} />;
            }
        }}
    />
);    
 
const mapStateToProps = state => ({
    isLogin : state.user.isLogin,
});
 
export default connect(mapStateToProps)(PrivateRoute);