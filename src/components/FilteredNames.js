import PersonLi from "./PersonLi"

export default function FilteredNames({ filterError, filteredPersonsArray, setPersons }) {
    return (
        <>
            <h2>Filtered</h2>
            {filterError &&
                <div>
                    <p className={"error"}>Error: There was no match for the search query</p>
                </div>
            }
            <ul>
                {filteredPersonsArray.map(person => (
                    <PersonLi key={person.id} person={person} setPersons={setPersons} />
                ))}
            </ul>
        </>
    )
}