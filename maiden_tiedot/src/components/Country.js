import React from 'react'
import Singlecountry from './Singlecountry'

const Country = ({ countries, clickHandler }) => {

    if(countries.length > 10) {
        return (
            <div>Too many results, specify</div>
        )
    }
    if(countries.length <= 10 && countries.length !== 1) {
        const country = countries.map((e, index) => (
            [<p key={index}>{e.name}</p>, 
            <button key={e.name}
            onClick={() => clickHandler(e)}>Show</button>]
        ))
        return (
            <div>
                {country}
            </div>
        )
    }
    if(countries.length === 1) {
        return (
            <Singlecountry country={countries} />
        )
    }
}

export default Country