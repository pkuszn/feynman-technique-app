export class HttpUtils {
    static prepareProvider(service: string, port: number): string {
        if (service === "" || port <= 0) {
            return "";
        }

        return service.concat(port.toString());
    }

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

        return provider.concat(endpoint.concat(id.toString()));
    }

    static getEndpointExpand(
        provider: string,
        endpoint: string,
        expand: string
    ): string {
        if (provider === "" || endpoint === "" || expand === "") {
            return "";
        }

        return provider.concat(endpoint.concat(expand));
    }
}
