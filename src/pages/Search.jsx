import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from "../components/header/Header";
import FilmContainer from "../components/films/FilmContainer";
import { films, watched } from "../components/constants";

const Search = () => {

    const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '200px',
        marginBottom: '0px'
    };

    const searchTextStyle = {
        fontSize: '30px',
        marginBottom: '25px',
        fontWeight: 'bold',
        marginTop: '1px',
    };

    // Стили для инпута
    const inputStyles = {
        marginBottom: '10px',
        width: 'calc(130px * 4 + 2px * 3 - 40px)',
        height: '40px',
        border: 'none',
        borderBottom: '1px solid #ccc',
        outline: 'none',
        paddingLeft: '10px',
        fontSize: '16px',
    };

    // Стили для контейнеров
    const containerStyles = {
        display: 'flex',
        justifyContent: 'center',
        gap: '2px',
        maxWidth: 'calc(459px * 4 + 2px * 3)',
        margin: '0 auto',
        padding: '20px',
        flexWrap: 'wrap',
    };

    const filmItemStyles = {
        marginBottom: '2px',
    };

    const secondContainerStyles = {
        ...containerStyles,
          };

    const firstFourFilms = films.slice(0, 4);

    const firstFourWatched = watched.slice(5, 9);

    return (
        <>
            <Header />

            <form style={formStyles}>
                <text type="submit" style={searchTextStyle}>Поиск</text>
                <label>
                    <input
                        type="text"
                        style={inputStyles}
                        placeholder="Введите название фильма, например Титаник"
                    />
                </label>
            </form>

            <div style={containerStyles}>
                <FilmContainer title="Рекомендации" films={firstFourFilms} itemStyles={filmItemStyles} />
            </div>

            <div style={containerStyles}>
                <FilmContainer title="Оскар 2021" films={firstFourWatched} itemStyles={filmItemStyles} />
            </div>
        </>
    );
};

export default Search;
