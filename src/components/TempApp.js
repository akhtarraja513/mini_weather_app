import React, { useState } from 'react';
import { useEffect } from 'react';
import './css/style.css'

const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchAPI = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=48f9abcdf36cecbe17fd646c8f285ca2`
            const response = await fetch(url);
            const resJSON = await response.json();
            setCity(resJSON.main);
        };
        fetchAPI();
    }, [search]);

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" placeholder='enter yor city...' className='inputField' value={search} onChange={(event) => { setSearch(event.target.value) }} />
                </div>

                {!city ? (
                    <p className='errorMsg'>No Data Found</p>
                ) : (<>
                    <div className="info">
                        <h2 className="location">
                            {search}
                        </h2>
                        <h1 className="temp">{city.temp}°C</h1>
                        <h3 className="tempmin_max">Min: {city.temp_min}°C | Max: {city.temp_max}°C</h3>
                        <h3 className="tempmin_max">Pressure: {city.pressure}kPa | Humidity: {city.humidity}%</h3>
                    </div>
                </>
                )}

            </div>
        </>
    )
}

export default TempApp;