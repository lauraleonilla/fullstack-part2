import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => {

const [ countries, setCountries ] = useState([])
const [ showAll, setShowAll ] = useState('')

useEffect(() => {
  axios.get('https://restcountries.eu/rest/v2/all')
  .then(res => setCountries(res.data))
}, [])

const handleSearchChange = (event) => {
  setShowAll(event.target.value)
}

const countriesToSHow = countries.filter(e => e.name.toLowerCase().indexOf(showAll.toLowerCase()) !== -1)

  return (
    <div>
      <h2>Search countries</h2>
      <input value={showAll} onChange={handleSearchChange}/>
      <Country countries={countriesToSHow}/>
    </div>
  )
}

export default App
