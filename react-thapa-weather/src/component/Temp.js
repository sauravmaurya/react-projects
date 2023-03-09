import React, { useState, useEffect } from 'react'
import WeatherCard from './WeatherCard';
import './style.css';

const Temp = () => {
    const [cityName, setCityName] = useState("patna")

    const [weatherInfo, setWeatherInfo] = useState({})

    const handleChange = (e) => {
        setCityName(e.target.value)
    }

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=fc3238df085ee0cce18b0a8d1a8cb3d5`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)

            const { temp, pressure, humidity } = data.main
            const { main: weathermood } = data.weather[0]
            const { name } = data
            const { speed } = data.wind
            const { country, sunset } = data.sys

            const weatherInfoObj = {
                temp,
                pressure,
                humidity,
                weathermood,
                name,
                speed,
                country,
                sunset
            }

            setWeatherInfo(weatherInfoObj)

        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getWeatherInfo()
    }, [])

    return (
        <>
            <div className="wrap">
                <div className='search'>
                    <input placeholder='search...'
                        autoFocus
                        id="search"
                        className="searchTerm"
                        value={cityName}
                        onChange={handleChange}></input>
                    <button type="button" className='searchButton' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>
            <WeatherCard weatherInfo={weatherInfo}></WeatherCard>
            {/* our temp card */}

        </>
    )
}

export default Temp
