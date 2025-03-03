import {useEffect} from 'react';
import useStore from "@/state/state.ts";

export const useRedirectOnEmptyState = () => {
    const querySkus = useStore((state) => state.QuerySKUs);
    const clusters = useStore((state) => state.Clusters);

    useEffect(() => {
        const isStateEmpty = querySkus.length === 0 && clusters.length === 0;

        if (isStateEmpty) {
            const shopifyUrl = import.meta.env.VITE_SHOPIFY_URL;
            if (shopifyUrl) {
                if (import.meta.env.VITE_DEBUG === "true") {
                    console.log("Redirecting to " + shopifyUrl);
                }
                window.location.href = shopifyUrl;
            }
        }
    }, [querySkus, clusters]);
};