import React from 'react';
import GlobalStyles from "./GlobalStyles"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Watch from './pages/Watch';

function App() {
    return (
        <>
            <GlobalStyles />
            {/* <Home /> */}
            {/* <Watch /> */}
            {/* <Register /> */}
            <Login />
        </>

    );
}
export default App;