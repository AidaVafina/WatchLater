import React from 'react';
import '../../styles/styles.css';

const FilmItem = ({ name, image }) => (
    <div className="film-item3">
        <img src={image} alt={name} />
        <p>{name}</p>
    </div>
);

export default FilmItem;
