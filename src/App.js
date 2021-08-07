import React, { useState, useEffect } from 'react';
//import axios from "axios"
import './App.css';


/* PHONEBOOK */
import AllNames from "./components/AllNames"
import FilteredNames from './components/FilteredNames';
import FilterForm from "./components/FilterForm";
import AddPersonForm from './components/AddPersonForm';

import personService from "./services/persons"

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [nameError, setNameError] = useState(false)
  const [nameEditSuccess, setNameEditSuccess] = useState(false)
  const [wrongName, setWrongName] = useState("")
  const [newPhone, setNewPhone] = useState("")
  const [searchName, setSearchName] = useState("")
  const [filteredPersonsArray, setFilteredPersonsArray] = useState([])
  const [filterError, setFilterError] = useState(false)
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    personService.getAll().then(response => {
      setPersons(response.data)
    })
  }, [])

  return (
    <div className="App">
      <h2>Phonebook</h2>

      <AddPersonForm
        persons={persons}
        newName={newName}
        nameError={nameError}
        wrongName={wrongName}
        newPhone={newPhone}
        setPersons={setPersons}
        setNewName={setNewName}
        setNameError={setNameError}
        setWrongName={setWrongName}
        setNewPhone={setNewPhone}
        setNameEditSuccess={setNameEditSuccess}
      />

      <FilterForm
        persons={persons}
        filteredPersonsArray={filteredPersonsArray}
        searchName={searchName}
        filterError={filterError}
        showAll={showAll}
        setSearchName={setSearchName}
        setFilteredPersonsArray={setFilteredPersonsArray}
        setFilterError={setFilterError}
        setShowAll={setShowAll}
      />

      <AllNames persons={persons} nameError={nameError} wrongName={wrongName} setPersons={setPersons} nameEditSuccess={nameEditSuccess} />

      <FilteredNames filteredPersonsArray={filteredPersonsArray} filterError={filterError} setPersons={setPersons}/>

    </div>
  );
}

// THIS STAYS
export default App;
