import React from 'react';
import myImage from '../images/Watch_Later_Logo_Full.svg';
import logo from '../images/logo.svg';
import '../styles/styles.css';
import {Routes, Route, Link } from 'react-router-dom'
import {Header} from "../components/Header";



const FirstPage = () => (
    <>
        <Header />
    <div className="first-page-container">
        <div className="imageNew">
        <div style={{ maxWidth: '100%' }}>
            <img
                src={myImage}
                alt=""
                className="watch-later-image"
            />
        </div>
        </div>

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

export default FirstPage;
