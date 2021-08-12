import axios from "axios"
import personService from "../services/persons"

export default function AddPersonForm({ persons, newName, newPhone, setPersons, setNewName, setNameError, setPhoneError, setWrongName, setNewPhone, setNameEditSuccess,}) {

    const handlePersonChange = (event) => {
        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()

        if (!newName) {
            setNameError(true)
        }

        if (!newPhone) {
            setPhoneError(true)
        }
        if (persons.some(el => el.name === newName)) {
            alert(`Names must be unique. ${newName} was not saved`)
            setNameError(true)
            setTimeout(() => {
                setNameError(false)
            }, 5000)
            setNameEditSuccess(false)
            setWrongName(newName)
            setNewName("")
            setNewPhone("")
            return
            // let numberSubstitution = window.confirm(`${newName} is already in the phone book. Replace the old number with ${newPhone}?`)
            // if (numberSubstitution) {
            //     const singlePerson = persons.find(p => p.name === newName)
            //     const changedPerson = { ...singlePerson, number: newPhone }

            //     // se o nome já existe - PUT
            //     personService.updateNumber(changedPerson.id, changedPerson).then(response => {
            //         setPersons(persons.map(person => person.id !== response.data.id ? person : response.data))
            //     }).then(nothing => {
            //         setNameEditSuccess(true)
            //         setNameError(false)
            //         setTimeout(() => {
            //             setNameEditSuccess(false)
            //         }, 5000);
            //         return
            //     })
            // }
            // else {
            //     setNameError(true)
            //     setTimeout(() => { 
            //         setNameError(false)
            //     }, 5000)
            //     setNameEditSuccess(false)
            //     setWrongName(newName)
            //     setNewName("")
            //     setNewPhone("")
            //     return

            // }
        }

        const fullPersonData = {
            "name": newName,
            "number": newPhone
        }

        console.log(fullPersonData)
        // se é um novo nome - POST
        personService.create(fullPersonData).then(response => {
            setPersons(persons.concat(response.data))
        })
        setNewName("")
        setNewPhone("")
        setNameError(false)
        setPhoneError(false)
    }

    return (
        <>
            <form onSubmit={addPerson}>
                <label>Add a new Person:</label>
                <input value={newName} onChange={handlePersonChange} placeholder={"a new name..."} />
                <input value={newPhone} onChange={handlePhoneChange} placeholder={"add phone number"} />
                <button type="submit">add</button>
            </form>
        </>
    )
}