import { HttpUtils } from "../utils/HttpUtils";
import config from "../appsettings.json";
import { BackendApi } from "../constants/Api";
import { PartOfSpeech } from "../models/PartOfSpeech";

export class PartOfSpeechService {
    private static PROVIDER: string = config.Api.Backend.Dev;

    public async getAllPartOfSpeechesAsync(): Promise<PartOfSpeech[]> {
        const endpoint: string = HttpUtils.getEndpoint(
            PartOfSpeechService.PROVIDER,
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
        return json as PartOfSpeech[];
    }

    public async getPartOfSpeechAsync(id: number): Promise<PartOfSpeech> {
        const endpoint: string = HttpUtils.getEndpointSpecific(
            PartOfSpeechService.PROVIDER,
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
        return json as PartOfSpeech;
    }
}
