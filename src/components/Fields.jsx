import React, { useState } from 'react';
import '../styles/styles.css';
import { Link } from 'react-router-dom';
import myImage from '../images/Watch_Later_Logo_Full.svg';

const Fields = ({ buttonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordsMatch(true);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordsMatch(true);
    };

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            if (password !== confirmPassword) {
                setPasswordsMatch(false);
            } else {
                setLoading(false);
            }
        }, 2000);
    };

    const isErrorClass = buttonText === 'Регистрация' && !passwordsMatch;

    return (
        <div className="login-container shared-styles">
            <div className="input-container">
                <img src={myImage} alt="" className="registration-logo" />
                <input
                    type="text"
                    placeholder="Адрес электронной почты"
                    className="registration-input"
                    value={email}
                    onChange={handleEmailChange}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    className={`registration-input ${buttonText === 'Регистрация' && !passwordsMatch ? 'error' : ''}`}
                    value={password}
                    onChange={handlePasswordChange}
                />
                {buttonText === 'Регистрация' && (
                    <>
                        <input
                            type="password"
                            placeholder="Повторите пароль"
                            className={`registration-input ${isErrorClass ? 'error' : ''}`}
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            disabled={buttonText !== 'Регистрация'}
                        />
                        {!passwordsMatch && (
                            <div className="error-text">Пароли не совпадают</div>
                        )}
                    </>
                )}
            </div>

            {loading ? (
                <div className="indeterminate-spinner">
                    {[...Array(12)].map((_, index) => (
                        <div key={index}></div>
                    ))}
                </div>
            ) : (
                <button className="registration-button" onClick={handleSubmit}>
                    {buttonText}
                </button>
            )}

            <p className="registration-text">
                {buttonText === 'Войти' ? 'Ещё не зарегистрированы?' : 'Уже зарегистрированы?'}{' '}
                <Link to={buttonText === 'Войти' ? '/rgstr' : '/login'}>
                    {buttonText === 'Войти' ? 'Регистрация' : 'Войти'}
                </Link>
            </p>
        </div>
    );
};

export default Fields;