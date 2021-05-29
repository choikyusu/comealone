import React, { Component } from "react";
import {connect} from 'react-redux';
import { useDispatch } from 'react-redux';
import * as userActions from '../../_reducers/user_reducer'
import './NaverLogin.css';

class NaverLogin extends Component {

  componentDidMount() {
   // Naver sdk import
    const naverScript = document.createElement("script");
    naverScript.src =
      "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
    naverScript.type = "text/javascript";
    document.head.appendChild(naverScript);

    // Naver sdk 스크립트 로드 완료시
    naverScript.onload = () => {
      const naverLogin = new window.naver.LoginWithNaverId({
        clientId: "O5PQk7N5HMqCty9Yeb2V",
        callbackUrl: "http://localhost:3000/login",
        callbackHandle: true,
        isPopup: false, // 로그인 팝업여부
        loginButton: {
          color: "green", // 색상(white, green)
          type: 3, // 버튼타입(1,2,3)
          height: 60, // 배너 및 버튼 높이
        },
      });

      naverLogin.init();
      naverLogin.logout(); // 네이버 로그인이 계속 유지되는 경우가 있다. 초기화시 로그아웃
      naverLogin.getLoginStatus((status) => {
        if (status) {
          console.log("Naver 로그인 상태", naverLogin.user);
          
          const { id, email, gender } = naverLogin.user;
          // 필수 제공 동의 조건
          if (gender == undefined) {
            alert("성별은 필수 동의 입니다. 정보제공을 동의해주세요.");
            naverLogin.reprompt();
            return;
          }

          this.props.dispatch(
            userActions.authUser(naverLogin)
            );

          this.props.history.push('/list');

        } else {
          console.log("Naver 비 로그인 상태");
        }
      });
    };
  }

  render() {
    return <div>
        <div className ="headerText">로그인</div>
        <div className="button" id="naverIdLogin"></div>
      </div>;
  }
}


const mapDispatchToProps = (dispatch) => ({
  authUser : () => dispatch(userActions.authUser()),
});

export default connect(mapDispatchToProps)(NaverLogin);
