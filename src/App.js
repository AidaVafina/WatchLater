import React from 'react';
import FirstPage from './pages/FirstPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Collection from "./pages/Collection";
import Search from "./pages/Search";
import Details from "./pages/Details";
import Profile from "./pages/Profile";
import Add from "./pages/Add";

function App() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/rgstr" element={<Registration />} />
            <Route path="/collect" element={<Collection />} />
            <Route path="/search" element={<Search />} />
            <Route path="/details" element={<Details />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add" element={<Add />} />
        </Routes>
    </Router>
  );
}

export default App;
