import React from 'react'

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