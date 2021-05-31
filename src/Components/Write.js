import React, {Component, useEffect} from 'react';
import {connect} from 'react-redux';
import * as userAction from '../_reducers/user_reducer';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles

import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/tooltip";
import "bootstrap/dist/css/bootstrap.css";



function Write ({userData, accessToken}){
    return (
        <ReactSummernote
          value="Default value"
          options={{
            lang: 'ru-RU',
            height: 350,
            dialogsInBody: true,
            toolbar: [
              ['style', ['style']],
              ['font', ['bold', 'underline', 'clear']],
              ['fontname', ['fontname']],
              ['para', ['ul', 'ol', 'paragraph']],
              ['table', ['table']],
              ['insert', ['link', 'picture', 'video']],
              ['view', ['fullscreen', 'codeview']]
            ]
          }}
        />
      );
}


const mapStateToProps = (state) => ({
    userData : state.user.userData,
    accessToken : state.user.accessToken
});

const mapDispatchToProps = (dispatch) => ({
    logout : () => dispatch(userAction.logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Write);