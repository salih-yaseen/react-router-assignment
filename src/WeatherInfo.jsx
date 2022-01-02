import React from 'react';
import {Link} from 'react-router-dom';
import{ useParams} from "react-router";
import { useState, useEffect } from "react";
let localCache={};
const key = 'f6374c93b191441caf9115611212112'


function WeatherInfo() {
    const {cityName} = useParams();
    console.log(cityName)
    const [location, setlocation] = useState(cityName);
  const [weather, setweather] = useState({
    city: location,
    country: 'Iraq',
    localtime: '2021-12-21 15:45',
    icon: '//cdn.weatherapi.com/weather/64x64/day/296.png',
    temp:10,
  });

  const updateWeather = async () => {
    if (localCache[location]) {
      setweather(localCache[location]);
      return;
    }

    const respond = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=no`
    );
    const data = await respond.json();

    const updateWeather = {
        city: data.location.name,
        country: data.location.country,
        localtime: data.location.localtime,
        icon: data.current.condition.icon,
        temp: data.current.temp_c
    };
    localCache[location] = updateWeather;
    setweather(updateWeather);
  };
  useEffect(() => {
    updateWeather();
  }, [location])
    return (
        <div>
            <h1>{weather.city}, {weather.country}</h1>
            <h3>{weather.localtime}</h3>
            <img src={weather.icon} alt="fdewfef" />
            <h1>{weather.temp}</h1> 
            <Link to={'/'} className='button'>It's too late GO HOMEEE</Link>
        </div>
    )
}

export default WeatherInfo
