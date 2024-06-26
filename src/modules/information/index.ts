import { getInformation } from "../helpers/functions/getInformation"

export const information = {
    os: async () => {
        return await getInformation('os', '');
    },
    cpu: {
        minimal: async () => {return await getInformation('cpu', 'minimal')},
        detailed: async () => {return await getInformation('cpu', 'detailed')},
        info: async () => {return await getInformation('cpu', 'info')},
        temperature: async () => {return await getInformation('cpu', 'temperature')}
    },
    gpu: async () => {
        return await getInformation('gpu', '');
    },
    usb: async () => {
        return await getInformation('usb', '');
    },
    wifi: {
        networks: async () => {return await getInformation('wifi', 'networks')},
        interfaces: async () => {return await getInformation('wifi', 'interfaces')},
        connections: async () => {return await getInformation('wifi', 'connections')}
    },
    audio: async () => {
        return await getInformation('audio', '');
    },
    memory: {
        usage: async () => {return await getInformation('memory', 'usage')},
        layout: async () => {return await getInformation('memory', 'layout')}
    },
    system: {
        time: async () => {return await getInformation('system', 'time')},
        os: async () => {return await getInformation('system', 'os')},
        uuid: async () => {return await getInformation('system', 'uuid')},
        users: async () => {return await getInformation('system', 'users')},
        display: async () => {return await getInformation('system', 'display')},
        processes: async () => {return await getInformation('system', 'processes')},
        processload: async () => {return await getInformation('system', 'processload')},
        services: async () => {return await getInformation('system', 'services')}
    },
    network: {
        defaultinterface: async () => {return await getInformation('network', 'defaultinterface')},
        defaultgateway: async () => {return await getInformation('network', 'defaultgateway')},
        interfaces: async () => {return await getInformation('network', 'interfaces')},
        stats: async () => {return await getInformation('network', 'stats')},
        connections: async () => {return await getInformation('network', 'connections')},
    },
    printer: async () => {
        return await getInformation('printer', '');
    },
    battery: async () => {
        return await getInformation('battery', '');
    },
    bluetooth: async () => {
        return await getInformation('bluetooth', '');
    },
    filesystem: {
        info: async () => {return await getInformation('filesystem', 'info')},
        layout: async () => {return await getInformation('filesystem', 'layout')},
        block: async () => {return await getInformation('filesystem', 'block')}
    },
    motherboard: {
        system: async () => {return await getInformation('motherboard', 'system')},
        bios: async () => {return await getInformation('motherboard', 'bios')},
        baseboard: async () => {return await getInformation('motherboard', 'baseboard')},
        chassis: async () => {return await getInformation('motherboard', 'chassis')},
    }
};