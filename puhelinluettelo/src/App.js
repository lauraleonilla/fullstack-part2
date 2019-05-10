import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Contacts from './components/Contacts'
import contactService from './services/contactService'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showAll, setShowall ] = useState('')

  useEffect(() => {
      contactService.getAll()
      .then(res => setPersons(res.data))
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
        name: newName,
        number: newNumber
    }
    if(persons.find(p => p.name === newName)) {
        alert(`${newName} on jo luettelossa!`)
    } else {
      contactService.create(personObject)
      .then(res => setPersons(persons.concat(res.data)))
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

  const removeContact = (event) => {
    contactService.remove(event.target)
  }

  const personsToShow = persons.filter(e => e.name.toLowerCase().indexOf(showAll.toLowerCase()) !== -1)

  return (
    <div>
      <h2>Puhelinluettelo</h2>
        <Search value={showAll} onChange={handleSearchChange}/>
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
     <Contacts contacts={personsToShow} remove={removeContact}/>
    </div>
  )

}

export default App