import config from "../appsettings.json";
import { BackendApi } from "../constants/Api";
import { Role } from "../models/Role";
import { HttpUtils } from "../utils/HttpUtils";

export class RoleService {
    private static PROVIDER: string =  config.Api.Backend.Dev;

    public async getAllRolesAsync(): Promise<Role[]> {
        const endpoint: string = HttpUtils.getEndpoint(
            RoleService.PROVIDER,
            BackendApi.ROLE_ALL
        );

        const res = await fetch(endpoint, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        });
        const json = await res.json();
        return json as Role[];
    }

    public async getRoleAsync(id: number): Promise<Role> {
        const endpoint: string = HttpUtils.getEndpointSpecific(
            RoleService.PROVIDER,
            BackendApi.ROLE,
            id
        );

        const res = await fetch(endpoint, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        });
        const json = await res.json();
        return json as Role;
    }
}