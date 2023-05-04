import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Greeting from "./Greeting";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <h1>Hello React and Rails!</h1>
                <Routes>
                    <Route path="/" element={<Greeting />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;