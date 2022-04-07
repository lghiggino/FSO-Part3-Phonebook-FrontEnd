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
  const [phoneError, setPhoneError] = useState(false)
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


      {nameError && <div>Name Error</div>}
      {phoneError && <div>Phone Value Error</div>}

      {process.env.NODE_ENV === "development" &&
        <div>
          <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
          <br />
          <small>{JSON.stringify(process.env, null, 4)}</small>
        </div>
      }

      <AddPersonForm
        persons={persons}
        newName={newName}
        // nameError={nameError}
        // phoneError={phoneError}
        // wrongName={wrongName}
        newPhone={newPhone}
        setPersons={setPersons}
        setNewName={setNewName}
        setNameError={setNameError}
        setPhoneError={setPhoneError}
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

      <AllNames persons={persons} nameError={nameError} wrongName={wrongName} phoneError={phoneError} setPersons={setPersons} nameEditSuccess={nameEditSuccess} />

      <FilteredNames filteredPersonsArray={filteredPersonsArray} filterError={filterError} setPersons={setPersons} />

    </div>
  );
}

// THIS STAYS
export default App;
