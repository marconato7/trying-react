function Header({ name })
{
    return (
        <header>Hello, {name}!</header>
    );
}

function App()
{
    return (
        <div>
            <Header name="Alice" />
            <main>main</main>
        </div>
    );
}

export default App;
