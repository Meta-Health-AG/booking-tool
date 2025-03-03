import {useSearch} from '@tanstack/react-router'
import {useClustersByMarkers} from '@/services/ClusterService'

function EntryPage() {
    const search = useSearch({
        from: "/entry"
    })

    const skus = search.skus as string
    const skuArray: string[] = skus.split(',')

    const {data: clusters, isLoading, error} = useClustersByMarkers(skuArray)

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

                <div className="mt-8">
                    <h3 className="text-lg font-medium mb-4">Gefundene Cluster:</h3>
                    {isLoading && <p className="text-gray-500">Lade Cluster...</p>}
                    {error && <p className="text-red-500">Fehler beim Laden der Cluster</p>}
                    {clusters && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {clusters.map((cluster) => (
                                <div
                                    key={cluster.cluster_id}
                                    className="p-4 border rounded-lg shadow-sm"
                                >
                                    <h4 className="font-semibold">{cluster.name}</h4>
                                    <p className="text-gray-600 text-sm">{cluster.description}</p>
                                    <p className="mt-2">
                                        <span className="font-medium">{cluster.price}</span>
                                        <span className="text-gray-500 ml-1">{cluster.currency}</span>
                                    </p>
                                    <div className="mt-2">
                                        {cluster.markers.map((marker, index) => (
                                            <span
                                                key={index}
                                                className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                                            >
                                                {marker}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <p className="text-sm text-gray-500">
                    Anzahl SKUs: {skuArray.length}
                </p>
            </div>
        </div>
    )
}

export default EntryPage