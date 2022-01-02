import React from 'react'
import {Link} from 'react-router-dom';
import { useState } from "react";
import './App.css';


function Home() {
    const [cityName, setcityName] = useState('Arbil');

    return (
        <div className="weather-container">
            <div className="search-area">
                    <h1>Select City</h1>
                   <select  id="location"
                   
                   onChange={ e=>{
                       setcityName(e.target.value);
                       
                   }}>
                       <option value="Arbil">Arbil</option>
                       <option value="Kirkuk">Kirkuk</option>
                       <option value="Duhok">Duhok</option>
                   </select>
                   <Link to={`/WeatherInfo/${cityName}`} className='button'>See the Weather</Link>
                
            </div>
        </div>  
    )
}

export default Home
