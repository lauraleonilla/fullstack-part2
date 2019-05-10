import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' },
    { name: 'LLL Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showAll, setShowall ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
        name: newName,
        number: newNumber
    }
    if(persons.find(p => p.name === newName)) {
        alert(`${newName} on jo luettelossa!`)
    } else {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    }
  }

  const handlePersonChange = (event) => {
      setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
      setShowall(event.target.value)
  }

  const personsToShow = persons.filter(e => e.name.toLowerCase().indexOf(showAll.toLowerCase()) !== -1)

  return (
    <div>
      <h2>Puhelinluettelo</h2>
        <input value={showAll} onChange={handleSearchChange}/>
      <h2>Lisää uusi</h2>
      <form onSubmit={addName}>
        <div>
          Nimi: <input value={newName} onChange={handlePersonChange}/>
          <div>
          Numero: <input value={newNumber} onChange={handleNumberChange}/>
          </div>
        </div>
        <div>
          <button type="submit">Lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <div>
      {personsToShow.map(e => <Person key={e.name} contacts={e}/>)}
      </div>
    </div>
  )

}

export default App