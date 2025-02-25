function App() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <p>{import.meta.env.VITE_BACKEND_KEY}</p>
        </>
    )
}

export default App
