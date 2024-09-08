import React from 'react';

const Button = ({ text, iconSrc, onClick }) => {
    const buttonStyle = {
        width: '151px',
        height: '38px',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',
        backgroundColor: '#2196F3',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const iconStyle = {
        width: '24px',
        height: '24px',
        flexShrink: 0,
    };

    const textStyle = {
        width: '99.488px',
        height: '17px',
        flexShrink: 0,
        color: '#FFF',
        fontFamily: 'SF Pro Text',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
        letterSpacing: '-0.336px',
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            <img src={iconSrc} alt="Icon" style={iconStyle} />
            <span style={textStyle}>{text}</span>
        </button>
    );
};

export default Button;
