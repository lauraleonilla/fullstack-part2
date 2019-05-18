import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Contacts from './components/Contacts'
import Input from './components/Input'
import contactService from './services/contactService'
import axios from 'axios'

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
        number: newNumber,
    }
    if(persons.find(p => p.name === newName)) {
      if(window.confirm(`${newName} on jo luettelossa, korvataanko numero uudella?`)) {
        updateNumber(newName)
      }
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

  const removePerson = (deleteId) => {
    deleteId = persons.find(e => e.id === deleteId)
    const name = persons.find(e => e.name === deleteId.name)
      if(window.confirm(`Poistetaanko ${name.name}`)) {
        deleteId = deleteId.id
        contactService.remove(deleteId)
        let updated = [ ...persons ]
        for(let i = 0; i < persons.length; i ++) {
          let person = persons[i]
          if(person.id === deleteId) {
            updated.splice(i, 1)
            break
          }
        }
        setPersons(updated)
    }
}

const updateNumber = (newName) => {
  let id  
  let person = persons.find(e => {
  id = e.id
  return e.name === newName
  })
  const updatedPerson = { ...person, number: newNumber }
  axios.put(`http://localhost:3001/persons/${id}`, updatedPerson).then(res => {
    setPersons(persons.map(person => person.id !== id ? person : res.data))
    setNewName('')
    setNewNumber('')
    })
}

  const personsToShow = persons.filter(e => e.name.toLowerCase().indexOf(showAll.toLowerCase()) !== -1)

  return (
    <div>
      <h2>Puhelinluettelo</h2>
        <Search value={showAll} onChange={handleSearchChange}/>
      <h2>Lisää uusi</h2>
      <form onSubmit={addName}>
        <div>
          Nimi: <Input value={newName} onChange={handlePersonChange} />
          <div>
          Numero: <Input value={newNumber} onChange={handleNumberChange} />
          </div>
        </div>
        <div>
          <button type="submit">Lisää</button>
        </div>
      </form>
     <Contacts contacts={personsToShow} remove={removePerson} />
    </div>
  )

}

export default App