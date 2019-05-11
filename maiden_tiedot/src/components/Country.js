import React from 'react'
import axios from 'axios'

const Country = ({countries}) => {
    const country = countries.map(e => <p key={e.name}>{e.name}</p>)
    if(countries.length > 10) {
        return (
        <div>
            <p>Too many countries, specify another filter</p>
        </div>
        )
    } 
    if(countries.length === 1) {
        const country = countries.map(e => <p key={e.name}>{e.name}</p>)
        const capital = countries.map(e => <p key={e.name}>Capital: {e.capital}</p>)
        const population = countries.map(e => <p key={e.name}>Population: {e.population}</p>)
        const languages = countries.map(e => e.languages.map(l => <li key={l.name}>{l.name}</li>))
        const flag = countries.map(e => e.flag)
        const weather = countries.map(e => e.capital)

        const url = `http://api.apixu.com/v1/current.json?key=924f75b268d5495d83a113709191105&q=${weather}`
        const current = axios.get(url).then(res => res.data)
        
        const getWeather = () => {
            axios.get(url).then(res => <p>{res.data.current.temp_c}</p>)
                console.log(current)
        }

        return (
            <div>
                <h2>{country}</h2>
                    {capital}
                    {population}
                <h3>Languages:</h3>
                    {languages}
                    <br></br>
                <div>
                    <img src={flag} alt="Flag" width="100px"/>
                    <h3>Temperature:</h3>
                    {getWeather()}
                </div>
            </div>
        )
    } else {
        return (
            <div>
               {country}
            </div>
        )
    }
}

export default Country