import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const EditProfile = ({ initialData, onSave }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        onSave(formData);
        navigate('/profile');
    };

    return (
        <div className="profile-container">
            <h2>Редактировать профиль</h2>
            <label>
                Имя:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Описание:
                <textarea name="description" value={formData.description} onChange={handleChange} />
            </label>
            <label>
                Любимый жанр:
                <input type="text" name="favoriteGenre" value={formData.favoriteGenre} onChange={handleChange} />
            </label>
            <button onClick={handleSave}>Сохранить</button>
        </div>
    );
};

export default EditProfile;