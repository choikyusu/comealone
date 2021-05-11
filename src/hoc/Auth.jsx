import React, {Component} from 'react';
import NaverLogin from '../NaverLogin';


class Auth extends Component{
    
    
    render(){
        return (
            <div>
                {this.props.dashboard}
            </div>
        );
    }

}


export default Auth;
