import {ClusterResponse} from "@/types.ts";


export const mockClusterData: ClusterResponse[] = [
    {
        cluster_id: "C146",
        name: "Cool Cluster",
        description: "Cool Cluster, helps you being cool",
        price: 299.99,
        currency: "CHF",
        markers: ["HDL", "LDL", "TSH"]
    },
    {
        cluster_id: "C123",
        name: "Basic Cluster",
        description: "Basic cluster, helps you being alright",
        price: 99.99,
        currency: "CHF",
        markers: ["CRP", "NA"]
    }
];
