export class HttpUtils {
    static getEndpoint(provider: string, endpoint: string): string {
        if (provider === "" || endpoint === "") {
            return "";
        }

        return provider.concat(endpoint);
    }

    static getEndpointSpecific(
        provider: string,
        endpoint: string,
        id: number
    ): string {
        if (provider === "" || endpoint === "" || id <= 0) {
            return "";
        }

        return prepareRoute(endpoint, id, provider);
    }

    static getEndpointCommand(
        provider: string,
        endpoint: string,
        command: string
    ): string {
        if (provider === "" || endpoint === "" || command === "") {
            return "";
        }

        return prepareRoute(endpoint, command, provider);
    }
}

function prepareRoute(endpoint: string, command: any, provider: string) {
    endpoint = [endpoint, command].join('/');
    return provider.concat(endpoint)
}

