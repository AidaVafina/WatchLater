import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/styles.css';
import {Header} from "../components/Header";

const Details = () => {
    const { filmId } = useParams();

    const filmData = {
        id: 1,
        name: 'Минари',
        year: 2020,
        description: 'Краткое содержание фильма...',
        genres: ['Драма'],
        image: '../images/films/minari.png',
    };

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: filmData.name,
        year: filmData.year,
        description: filmData.description,
        genres: filmData.genres.join(', '),
    });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleSaveEdit = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
        <Header />
        <div className="film-details-container">
            <div className="film-details">
                <div className="film-details-left">
                    <h2>{filmData.name}</h2>
                    <p>{filmData.year}</p>
                    {!isEditing ? (
                        <>
                            <p>{filmData.description}</p>
                            <p>Жанры: {filmData.genres.join(', ')}</p>
                            <button onClick={handleEditClick}>Редактировать</button>
                        </>
                    ) : (
                        <>
                            <label>
                                Название:
                                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                            </label>
                            <label>
                                Год:
                                <input type="text" name="year" value={formData.year} onChange={handleChange} />
                            </label>
                            <label>
                                Описание:
                                <textarea name="description" value={formData.description} onChange={handleChange} />
                            </label>
                            <label>
                                Жанры:
                                <input type="text" name="genres" value={formData.genres} onChange={handleChange} />
                            </label>
                            <button onClick={handleSaveEdit}>Сохранить</button>
                            <button onClick={handleCancelEdit}>Отмена</button>
                        </>
                    )}
                </div>

            </div>
        </div>
        </>
    );
};

export default Details;
