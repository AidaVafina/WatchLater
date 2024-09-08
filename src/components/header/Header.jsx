import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/styles.css';
import search from '../../images/search.svg';
import collect from '../../images/collection.svg';
import add from '../../images/add.svg';
import avatar from '../../images/avatar.svg';
import agon from '../../images/agon.svg'

const IconButton = ({ text, icon, onClick, active }) => (
    <button className={`icon-button ${active ? 'active' : ''}`} onClick={onClick}>
        <img src={icon} alt="Icon" />
        <span>{text}</span>
    </button>
);

export function Header() {

    const navigate = useNavigate();

    const handleCollectionClick = () => {
        navigate("/collect");
    };

    const handleCollectionClick2 = () => {
        navigate("/search");
    };

    const handleCollectionClick3 = () => {
        navigate("/add");
    };

    const handleCollectionClick4 = () => {
        navigate("/profile");
    };

    return (
        <div className="center">
            <header className="profile-header">
                <div className="header-buttons-left">
                    <IconButton text="Коллекция" icon={collect} onClick={handleCollectionClick} />
                    <IconButton text="Добавить" icon={add} onClick={handleCollectionClick3} />
                </div>

                <div className="profile-logo">
                    <img src = {agon} alt = "" className="agon-image"/>
                </div>

                <div className="header-buttons-right">
                    <IconButton text="Поиск" icon={search} onClick={handleCollectionClick2}/>
                    <button className="avatar-button">
                        <img src={avatar} alt="" className="avatar-image" onClick={handleCollectionClick4}  />
                    </button>
                </div>
            </header>
        </div>
    );
}
