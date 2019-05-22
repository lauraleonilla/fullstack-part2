import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Singlecountry = ({ country }) => {

    const [weather, setWeather] = useState(0)

    useEffect(() => {
        const city = country.map(e => e.capital)
        axios.get(`http://api.apixu.com/v1/current.json?key=924f75b268d5495d83a113709191105&q=${city}`)
        .then(res => setWeather(res.data.current.temp_c))
    }, [country])

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

    return (
        <div>
            {countryToShow}
            <div>
            <h3>Temperature:</h3>
             <p>{weather} Celcius</p>
            {/* <h3>Wind:</h3>
            <p>{weather} Celcius</p>  */}
            </div>
        </div>
    )
}

export default Singlecountry


