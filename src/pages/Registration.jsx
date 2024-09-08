import React from 'react';
import ImageNew from "../components/ImageNew";
import LoginForm from "../components/RegistrationForm";

const Registration = () => {
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

export default Registration;
