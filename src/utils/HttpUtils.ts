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

        return [provider, endpoint, id].join("/");
    }

    static getEndpointExpand(
        provider: string,
        endpoint: string,
        expand: string
    ): string {
        if (provider === "" || endpoint === "" || expand === "") {
            return "";
        }

        return [provider, endpoint, expand].join("/");
    }
}
