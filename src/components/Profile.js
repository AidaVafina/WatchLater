import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';

const Profile = () => {
    const navigate = useNavigate();

    const [profileData, setProfileData] = useState({
        name: 'Имя профиля',
        description: 'Описание профиля...',
        favoriteGenre: 'Любимый жанр',
        profileImage: null,
    });

    const handleEditClick = () => {
        navigate('/edit-profile');
    };

    return (
        <div className="profile-container">
            <h2>Профиль</h2>
            <img src={profileData.profileImage} alt="Фотография профиля" className="profile-image" />
            <p>Имя: {profileData.name}</p>
            <p>Описание: {profileData.description}</p>
            <p>Любимый жанр: {profileData.favoriteGenre}</p>
            <button onClick={handleEditClick}>Редактировать</button>
        </div>
    );
};

export default Profile;