import personService from "../services/persons"

export default function PersonLi({ person, setPersons }) {
    const removePerson = async (id) => {
        console.log(id)
        await personService.remove(id).then(response => {
            console.log(response.data)
            personService.getAll().then(response => {
                setPersons(response.data)
            })
        })
    }


    return (
        <li key={person.id} className={"personLi"}> {person.name}: {person.number} <button onClick={() => removePerson(person.id)}>remove</button> </li>
    )
}

