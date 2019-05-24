import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Error = ({ error }) => {
    const errorStyle = {
        color: 'red'
    }
    return (
        <div>
            <h3 style={errorStyle}>{error}</h3>
        </div>
    )
}

const Singlecountry = ({ country }) => {

    const [weather, setWeather] = useState()
    const [isError, setIsError] = useState(null)

    useEffect(() => {
        const city = country.map(e => e.capital)
        axios.get(`http://api.apixu.com/v1/current.json?key=924f75b268d5495d83a113709191105&q=${city}`)
            .then(res => setWeather(res.data))
            .catch (error => setIsError('No data available'))
    }, [country])

    const showTemp = () => !weather ? 0 : weather.current.temp_c
    const showWind = () => !weather ? 0 : weather.current.wind_kph
    const showCondition = () => !weather ? '' : weather.current.condition.text
    const showImage = () => !weather ? '' : weather.current.condition.icon

    const countryToShow = country.map((e, index) => (
       [ <h2 key={index}>{e.name}</h2>,
        <p key={e.capital}>Capital: {e.capital}</p>,
        <p key={e.population}>Population: {e.population}</p>,
        e.languages.map(e => <li key={e.name}>{e.name}</li>),
        <br key={e.name}></br>,
        <img src={e.flag} key={e.flag} alt="Country flag" width="200"/>,
        <br key={e}></br>,
        <h3 key={e.alpha2Code}>Weather in {e.capital}:</h3>
        ]
    ))

    const watherDivStyles = {
        display: 'flex',
        justifyItems: 'flex-start',
        alignItems: 'baseline'
      }

    return (
        <div>
            {countryToShow}
            <Error error={isError} />
            <div style={watherDivStyles}>
                <h3>Temperature:</h3>&nbsp;<p>{showTemp()} Celcius</p>
             </div>
             <div style={watherDivStyles}>
                <h3>Wind:</h3>&nbsp;<p>{showWind()} kph</p>
            </div>
            <img src={showImage()}alt="Country weather" width="100"/>
            <div style={watherDivStyles}>
                <h3>Condition:</h3>&nbsp;<p>{showCondition()}</p>
            </div>
        </div>
    )
}

export default Singlecountry


