import Home from './Home';
import WeatherInfo from './WeatherInfo';
import { Route, Routes } from 'react-router';
 import React from 'react'
 const CustomeRoutes = () => (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/WeatherInfo/:cityName" element={<WeatherInfo/>} />

    </Routes>
)


export default CustomeRoutes;