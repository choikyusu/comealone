import React, {useEffect} from 'react';
import NaverLogin from '../NaverLogin';
import { auth } from '../_actions/user_action';
import { useDispatch } from 'react-redux';




export default function (SpecificComponent){

    function AuthenticationCheck(props){
        const dispatch = useDispatch();
        useEffect(() => {
            console.log('a');
             dispatch(auth(() => {console.log('a')}));
            
        }, [])

        return (
            <SpecificComponent/>
        )
    }

    return AuthenticationCheck;
}

