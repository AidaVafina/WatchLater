import React from 'react';
import '../styles/styles.css';
import {Routes, Route, Link } from 'react-router-dom'
import {Header} from "../components/header/Header";
import {Films} from "../components/films/Films";

const Collection = () => (
    <>
        <Header />
        <Films/>
    </>
);

export default Collection;
