const people = 
[
    "Alice",
    "Bob",
    "Jane",
    "John",
];

function Header({ name })
{
    return (
        <header>Hello, {name}!</header>
    );
}

function Main({ people })
{
    return (
        <ul>
            { people.map(person => <li>{ person }</li>) }
        </ul>
    );
}

function App()
{
    return (
        <div>
            <Header name="Alice" />
            <Main people={people} />
        </div>
    );
}

export default App;
