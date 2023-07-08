import { HttpUtils } from "../utils/HttpUtils";
import config from "../../appsettings.json";
import { BackendApi } from "../constants/api";
import { Word } from "../models/Word";

export class WordService {
    private static PROVIDER: string = HttpUtils.prepareProvider(
        config.Api.Backend.Provider,
        config.Api.Backend.Port
    );

    public async getAllWordsAsync(): Promise<Word[]> {
        const endpoint: string = HttpUtils.getEndpoint(
            WordService.PROVIDER,
            BackendApi.WORD_ALL
        );

        const res = await fetch(endpoint);
        const json = await res.json();
        return json as Word[];
    }

    public async getWordAsync(id: number): Promise<Word> {
        const endpoint: string = HttpUtils.getEndpointSpecific(
            WordService.PROVIDER,
            BackendApi.WORD,
            id
        );

        const res = await fetch(endpoint);
        const json = await res.json();
        return json as Word;
    }
}
