import { useState } from "react"

export default function FilterForm({ persons, filteredPersonsArray, searchName, filterError, showAll, setSearchName, setFilteredPersonsArray, setFilterError, setShowAll   }) {
    const handleSearchNameChange = (event) => {
        setSearchName(event.target.value)
    }

    const filterPerson = (event) => {
        event.preventDefault()
        console.log(searchName)
        const filteredArray = persons.filter(el => el.name.toLowerCase() === searchName.toLowerCase())
        if (filteredArray.length > 0) {
            setFilteredPersonsArray(filteredArray)
            setShowAll(false)
            setFilterError(false)
        } else {
            setFilterError(true)
            setShowAll(true)
        }
        setSearchName("")
    }

    return (
        <>
            <form onSubmit={filterPerson}>
                <label>Search person:</label>
                <input value={searchName} onChange={handleSearchNameChange} placeholder={"type a person name"} />
                <button type="submit">search</button>
            </form>
        </>
    )
}