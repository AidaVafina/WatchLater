import React, { useState } from 'react';
import '../styles/styles.css';
import avatarPlaceholder from '../images/avatar.svg';
import { Header } from "../components/header/Header";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'Имя пользователя',
        description: 'Краткое описание',
        favoriteGenre: 'Любимый жанр',
        profileImage: avatarPlaceholder,
    });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveEdit = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Header />
            <div className="profile-container11">
                <h2 className="profile-heading">Профиль</h2>
                {isEditing ? (
                    <>
                        <label1>
                            Фотография профиля:
                            <input type="file" accept="image/*" name="profileImage" onChange={handleChange} />
                        </label1>
                        <label1>
                            Имя:
                            <input type="text" name="name" value={profileData.name} onChange={handleChange} />
                        </label1>
                        <label1>
                            Описание:
                            <textarea name="description" value={profileData.description} onChange={handleChange} />
                        </label1>
                        <label1>
                            Любимый жанр:
                            <input type="text" name="favoriteGenre" value={profileData.favoriteGenre} onChange={handleChange} />
                        </label1>
                        <button onClick={handleSaveEdit}>Сохранить</button>
                    </>
                ) : (
                    <>
                        <img src={profileData.profileImage} alt="Avatar" className="profile-avatar" />
                        <p className="profile-text"><strong>Имя:</strong> {profileData.name}</p>
                        <p className="profile-text"><strong>Описание:</strong> {profileData.description}</p>
                        <p className="profile-text"><strong>Любимый жанр:</strong> {profileData.favoriteGenre}</p>
                        <div className="edit-buttons">
                            <button onClick={handleEditClick}>Редактировать</button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Profile;
