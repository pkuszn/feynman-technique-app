import { HttpUtils } from "../utils/HttpUtils";
import config from "../appsettings.json";
import { BackendApi } from "../constants/api";
import { Word } from "../models/Word";
export class WordService {
    private static PROVIDER: string = config.Api.Backend.Dev;

    public static async getAllWordsAsync(): Promise<Word[]> {
        const endpoint: string = HttpUtils.getEndpoint(
            WordService.PROVIDER,
            BackendApi.WORD_ALL
        );

        const res = await fetch(endpoint, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://localhost:7162'
            }
        });
        const json = await res.json();
        return json as Word[];
    }

    public static async getWordAsync(id: number): Promise<Word> {
        const endpoint: string = HttpUtils.getEndpointSpecific(
            WordService.PROVIDER,
            BackendApi.WORD,
            id
        );

        const res = await fetch(endpoint, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://localhost:7162'
            }
        });
        const json = await res.json();
        return json as Word;
    }
}
