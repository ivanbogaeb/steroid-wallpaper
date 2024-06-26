import getMetrics from "../helpers/functions/api/metrics/get";

export const metrics = {
    cpu: async () => {
        return await getMetrics('cpu');
    },
    gpu: async () => {
        return await getMetrics('gpu');
    },
    memory: async () => {
        return await getMetrics('memory');
    },
    network: async () => {
        return await getMetrics('network');
    },
    filesystem: async () => {
        return await getMetrics('filesystem');
    }
};