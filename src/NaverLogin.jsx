import React from "react";

class NaverLogin extends React.Component {
  constructor(props) {
    super(props);
    this.initializeNaverLogin = this.initializeNaverLogin.bind(this);
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js";
    script.async = true;

    document.body.appendChild(script);
  }

  initializeNaverLogin() {
    const naver = window["naver"];
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "O5PQk7N5HMqCty9Yeb2V",
      callbackUrl: "http://localhost:3000",
      isPopup: false, // popup 형식으로 띄울것인지 설정
      loginButton: { color: "white", type: 1, height: "47" }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();
  }

  render() {
    return <div id="naverIdLogin"></div>;
  }
}

export default NaverLogin;
