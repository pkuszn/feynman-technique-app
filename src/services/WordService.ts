import { HttpUtils } from "../utils/HttpUtils";
import config from "../appsettings.json";
import { BackendApi } from "../constants/Api";
import { Word } from "../models/Word";

type BodyRequest = {
    name: string[],
    offset: number | null,
    partOfSet: number | null
};

export class WordService {
    private static PROVIDER: string = config.Api.Backend.Dev;

    public static async getAllWordsAsync(): Promise<Word[]> {
        const endpoint: string = HttpUtils.getEndpoint(
            WordService.PROVIDER,
            BackendApi.WORD_ALL
        );

        const res = await fetch(endpoint, {
            method: "GET",
            headers: config.HeaderBackend
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
            headers: config.HeaderBackend
        });
        const json = await res.json();
        return json as Word;
    }

    public static async deleteWordAsync(id: number): Promise<void> {
        const endpoint: string = HttpUtils.getEndpointSpecific(
            WordService.PROVIDER,
            BackendApi.WORD,
            id
        );

        await fetch(endpoint, {
            method: "DELETE",
            headers: config.HeaderBackend
        });
    }

    public static async getWordWhereLimitAsync(search: string, offset: number | null, partOfSet: number | null): Promise<Word[]> {
        const endpoint: string = HttpUtils.getEndpoint(
            WordService.PROVIDER,
            BackendApi.WORD_GET
        );

        const bodyRequest = this.prepareBody(search, offset, partOfSet);

        const res = await fetch(endpoint, {
            method: "POST",
            headers: config.HeaderBackend,
            body: bodyRequest
        })

        const json = await res.json();
        return json as Word[];
    }

    public static async getAmountOfEntriesAsync(): Promise<number> {
        const endpoint = HttpUtils.getEndpoint(
            WordService.PROVIDER,
            BackendApi.WORD_COUNT
        );

        const res = await fetch(endpoint, {
            method: "GET",
            headers: config.HeaderBackend
        });

        const json = await res.json();
        return json as number;
    }

    public static prepareBody(search: string, offset: number | null, partOfSet: number | null): BodyInit | undefined {
        var json : BodyRequest = {
            name: [],
            offset,
            partOfSet
        };
        
        if (search !== "") {
            json.name.push(search);
        }

        if (offset !== null) {
            json.offset = offset;
        }

        if (partOfSet !== null) {
            json.partOfSet = partOfSet;
        }

        return JSON.stringify(json);
    }
}
