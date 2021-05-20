// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, {Component, components} from 'react';
import Counter from './Counter';
import {connect} from 'react-redux';
import * as counterActions from './_reducers/user_reducer';


class CounterContainer extends Component {

    handleIncrement = () => {
        this.props.increment();
    }

    handleDecrement = () => {
        this.props.decrement();
    }

    render() {
        const { handleIncrement, handleDecrement} = this;
        const { number, isLogin } = this.props;
        return (
            <Counter 
                onIncrement = {handleIncrement}
                onDecrement = {handleDecrement}
                number = {number}
                isLogin = {isLogin}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    number : state.user.number,
    isLogin : state.user.isLogin

});

const mapDispatchToProps = (dispatch) => ({
    increment : () => dispatch(counterActions.increment()),
    decrement : () => dispatch(counterActions.decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);