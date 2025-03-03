function ErrorPage() {
    return (
        <div className="flex flex-col items-center w-full justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl mb-4">Diese Seite wurde nicht gefunden</p>
            <a href="/" className="text-blue-500 hover:text-blue-700">
                Zurück zur Startseite
            </a>
        </div>
    )
}

export default ErrorPage;
