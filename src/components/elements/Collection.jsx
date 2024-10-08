import React from 'react';
import { Header } from "../header/Header";
import { films, watched } from "../constants";
import FilmContainer from "../films/FilmContainer";

const Collection = () => (
    <>
        <Header />
        <p>Ваш текст</p>

        <form>
            <label>
                Ваш инпут:
                <input type="text" />
            </label>
            <button type="submit">Отправить</button>
        </form>

        <FilmContainer title="Фильмы" films={films} />

        <FilmContainer title="Просмотрено" films={watched} />
    </>
);

export default Collection;
