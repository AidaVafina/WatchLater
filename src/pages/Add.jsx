import React from 'react';
import '../styles/styles.css';
import { Header } from "../components/Header";

const Add = () => (
    <>
        <Header />
        <div className="center1">
            <div className="add-container1">
                <div className="center-content1">
                    <h2>О фильме</h2>
                    <div className="buttons-container1">
                        <button>КиноПоиск</button>
                        <button>Вручную</button>
                    </div>
                    <div className="input-container1">
                        <label htmlFor="movieName">Название</label>
                        <input
                            type="text"
                            id="movieName"
                            className="input-field1"
                            placeholder="Например, Титаник"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Add;
