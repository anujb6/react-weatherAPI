import React, { useState, useEffect } from 'react'
import  'react/cjs/react.production.min';
import "./temp.css"

function Temp() {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8ceb7094aafde1af43748692d3bbd91c`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main)
        }

        fetchApi();
    }, [search] )
    return (
        <>
        <div className="box">
            <div className="inputData">
                <input type="search" 
                name="" id="" 
                className="inputField" 
                onChange= { (event) => {
                    setSearch(event.target.value);
                } } />
            </div>
            
            {!city ? (
                <p className="errorMsg">No Data Found</p>
            ) : (
              <div>
              <div className="info">
                <h2 className="location"><i className="fas fa-street-view"></i>{search}</h2>
                <h1 className="temp">{city.temp} cel</h1>
                <h3 className="tempmin_max"> Min : {city.temp_min} cel | Min : {city.temp_max} cel  </h3>
            </div>       
              <div className="wave -one"></div>  
              <div className="wave -two"></div>  
              <div className="wave -three"></div>  
              </div>
            )}
        </div>
        </>
    )
}

export default Temp;
