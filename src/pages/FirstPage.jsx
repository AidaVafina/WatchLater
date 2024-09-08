import React from 'react';
import logo from '../images/logo.svg';
import '../styles/mainPage.scss';
import {Header} from "../components/header/Header";
import ImageNew from "../components/ImageNew";
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
    <>
        <Header />
        <div className="first-page-container">
            <div className="imageNew-first-page">
                <ImageNew/>
            </div>
            <button
                onClick={handleLoginClick}
                type="button"
                className="button"
            >
                Войти
            </button>
            <div className="login-container">
                <img
                    src={logo}
                    alt="Logo"
                    className="logo-image"
                />
            </div>
        </div>
    </>
    );
}

export default FirstPage;
