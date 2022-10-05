import React from 'react';
import GlobalStyles from "./GlobalStyles"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Watch from './pages/Watch';

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";


function App() {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Routes >
                    <Route path="/" element={<Register />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route path="home" element={<Home />} />
                    <Route path="watch" element={<Watch />} />
                    <Route path="/*" element={<Navigate to="/home" replace />} />
                </Routes>
            </BrowserRouter>
        </>


    );
}
export default App;