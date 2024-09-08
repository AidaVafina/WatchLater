import React from 'react';
import myImage from '../images/Watch_Later_Logo_Full.svg';

const ImageNew = () => {
    return (
        <div className="imageNew">
            <img
                src={myImage}
                alt=""
                className="watch-later-image"
            />
        </div>
    );
};

export default ImageNew;
