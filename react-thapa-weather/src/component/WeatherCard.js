import React from 'react'

function WeatherCard({ weatherInfo }) {
    const {
        temp,
        pressure,
        humidity,
        weathermood,
        name,
        speed,
        country,
        sunset
    } = weatherInfo

    let sec = sunset
    let time = new Date(sec * 1000)
    let timeString = `${time.getHours()}:${time.getMinutes()}`

    return (
        <>
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className='wi wi-day-sunny'></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{temp}&deg;</span>
                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>{weathermood}</div>
                        <div className='place'>{`${name},${country}`}</div>
                    </div>
                </div>
                <div className='date'>{new Date().toLocaleString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {timeString}PM <br />
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                <br />
                                {humidity}
                            </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                <br />
                                {pressure}
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                <br />
                                {speed}
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default WeatherCard
