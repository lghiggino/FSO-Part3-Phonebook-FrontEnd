import PersonLi from "./PersonLi"

export default function AllNames({ persons, nameError, wrongName, setPersons, nameEditSuccess }) {
    return (
        <>
            <h2>Names</h2>
            {nameEditSuccess &&
                <div>
                    <p className={"success"}> Number changed successfully</p>
                </div>
            }
            {nameError &&
                <div>
                    <p className={"error"}>{wrongName}'s number was not changed</p>
                </div>
            }
            <ul>
                {persons.map(person => (
                    <PersonLi key={person.id} person={person} setPersons={setPersons} />
                    // <li key={person.id} className={"personLi"}> {person.name}: {person.number} <button>remove</button> </li>
                ))}
            </ul>

        </>
    )
}