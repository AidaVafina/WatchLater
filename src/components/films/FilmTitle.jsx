import React from "react";
import arrow from "../../images/arrow.svg";

const FilmTitle = ({ title }) => (
    <div className="film-title">
        <p>{title}</p>
        <img src={arrow} alt="Иконка" width="20" height="20" />
    </div>
);

export default FilmTitle;
