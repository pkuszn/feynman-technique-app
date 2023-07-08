import config from "../appsettings.json";
import { BackendApi } from "../constants/api";
import { User } from "../models/User";
import { HttpUtils } from "../utils/HttpUtils";

export class UserService {
    private static PROVIDER: string = config.Api.Backend.Dev;

    public async getAllUsersAsync(): Promise<User[]> {
        const endpoint: string = HttpUtils.getEndpoint(
            UserService.PROVIDER,
            BackendApi.USER_ALL
        );
        const res = await fetch(endpoint, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        });
        const json = await res.json();
        return json as User[];
    }

    //TODO: Get user by post

    public async getUserAsync(id: number): Promise<User> {
        const endpoint: string = HttpUtils.getEndpointSpecific(
            UserService.PROVIDER,
            BackendApi.USER,
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
        return json as User;
    }
}
