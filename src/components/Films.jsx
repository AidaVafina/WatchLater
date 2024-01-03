import React, { useState } from "react";
import { films } from "./constants";
import { watched } from "./constants";
import '../styles/styles.css';
import FilmTitle from "./FilmTitle";
import filmscoll from "../images/filmscoll.svg";

export function Films() {
    const [activeButton, setActiveButton] = useState("toWatch");
    const [showTitles, setShowTitles] = useState(false);

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
        setShowTitles(buttonType === "additional" && !showTitles);
    };

    const getFilmsToDisplay = () => {
        if (activeButton === "toWatch") return films;
        if (activeButton === "viewed") return watched;
        return [];
    };

    return (
        <>
            <div className="films-header">
                <div className="buttons-container">
                    <p className="header-text">Коллекция</p>
                    <button
                        className={`header-button ${activeButton === "toWatch" ? "active" : ""}`}
                        onClick={() => handleButtonClick("toWatch")}
                    >
                        Буду смотреть
                    </button>
                    <button
                        className={`header-button ${activeButton === "viewed" ? "active" : ""}`}
                        onClick={() => handleButtonClick("viewed")}
                    >
                        Просмотрено
                    </button>
                    <button
                        className={`additional-button ${activeButton === "additional" && showTitles ? "active" : ""}`}
                        onClick={() => handleButtonClick("additional")}
                    >
                        <img src={filmscoll} alt="Ваша иконка" width="20" height="20" />
                    </button>
                </div>
            </div>
            <div className="films-container-wrapper">
                <div className="films-container">
                    {getFilmsToDisplay().map((film) => (
                        <div key={film.id} className="film-item">
                            <img src={film.image} alt={film.name} className="film-image" />
                            <p className="film-name">{film.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            {showTitles && (
                <div className="titles-container">
                    {getFilmsToDisplay().map((film) => (
                        <FilmTitle key={film.id} title={film.name} />
                    ))}
                </div>
            )}
        </>
    );
}
