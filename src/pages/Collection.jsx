import React from 'react';
import '../styles/styles.css';
import {Routes, Route, Link } from 'react-router-dom'
import {Header} from "../components/Header";
import {Films} from "../components/Films";

const Collection = () => (
    <>
        <Header />
        <Films/>
    </>
);

export default Collection;
