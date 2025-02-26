import {useSearch} from '@tanstack/react-router'


function EntryPage() {
    const search = useSearch({
        from: "/entry"
    })

    const skus = search.skus as string
    const skuArray: string[] = skus.split(',')


    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold underline mb-6">
                Hello Entry!
            </h1>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Query Parameter:</h2>
                <p className="text-gray-600">Rohe SKUs: {skus}</p>

                <div>
                    <h3 className="text-lg font-medium mb-2">Einzelne SKUs:</h3>
                    <ul className="space-y-2">
                        {skuArray.map((sku: string, index: number) => (
                            <li key={index}>{sku}</li>
                        ))}
                    </ul>
                </div>

                <p className="text-sm text-gray-500">
                    Anzahl SKUs: {skuArray.length}
                </p>
            </div>
        </div>
    )
}

export default EntryPage