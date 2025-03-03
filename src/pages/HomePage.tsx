import {useRedirectOnEmptyState} from "@/hooks/useRedirectOnEmptyState.ts";

function HomePage() {
    useRedirectOnEmptyState()

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello Home!
            </h1>
        </>
    )
}

export default HomePage
