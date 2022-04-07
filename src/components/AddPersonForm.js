import personService from "../services/persons"

export default function AddPersonForm({ persons, newName, newPhone, setPersons, setNewName, setNameError, setPhoneError, setWrongName, setNewPhone, setNameEditSuccess, }) {

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
        }

        const fullPersonData = {
            "name": newName,
            "number": newPhone
        }

        console.log(fullPersonData)
        // se é um novo nome - POST
        try {
            personService.create(fullPersonData).then(response => {
                setPersons(persons.concat(response.data))
            })
        } catch (error) {
            console.log("bateiu aqui na validação de erros")
            if (error.message.includes("number")) {
                setPhoneError(true)
            } else if (error.message.includes("name missing")) {
                setNameError(true)
            }
        } finally {
            setTimeout(() => {
                setPhoneError(false)
                setNameError(false)
            }, 4000)
        }
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