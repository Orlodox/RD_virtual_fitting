import React from 'react';
import s from './Login.module.css';
import {auth} from "../../redux/auth-reducer";
import {connect} from "react-redux";

const Login = (props) => {

    const refLogin = React.createRef();
    const refPass = React.createRef();

    return (
        <div className={s.loginPage}>
            <h2 align={'center'}>RD FITTING ROOM ADMIN</h2>
            <div><input ref={refLogin} type="text" placeholder={'Логин'}/></div>
            <div><input ref={refPass} type="password" placeholder={'Пароль'}/></div>
            {props.isAuth === false && <div>Неверный логин или пароль!</div>}
            <div>
                <button onClick={() => props.auth(refLogin.current.value, refPass.current.value)}>Войти</button>
            </div>
        </div>)
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
    }
};

export default connect(mapStateToProps, {
    auth
})(Login);