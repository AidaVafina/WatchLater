import React from 'react';
import FilmItem from "./FilmItem";
import '../styles/styles.css';

const FilmContainer = ({ title, films }) => (
    <div className="film-container3">
        <h2>{title}</h2>
        <div className="film-items3">
            {films.map(film => (
                <FilmItem key={film.id} name={film.name} image={film.image} />
            ))}
        </div>
    </div>
);

export default FilmContainer;
