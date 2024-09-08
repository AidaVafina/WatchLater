import React from 'react';
import ImageNew from "../components/ImageNew";
import '../styles/login.scss';
import LoginForm from "../components/LoginForm";

const Login = () => {
    return (
        <div className="login-container">
            <div className="imageNew-login">
                <ImageNew/>
            </div>
            <div className="input-login">
            <LoginForm></LoginForm>
            </div>
        </div>
    );
};

export default Login;
