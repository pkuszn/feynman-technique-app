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

    public static async deleteWordAsync(id: number): Promise<void> {
        const endpoint: string = HttpUtils.getEndpointSpecific(
            WordService.PROVIDER,
            BackendApi.WORD,
            id
        );

        await fetch(endpoint, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://localhost:7162'
            }
        });
    }

    public static async getWordWhereLimitAsync(search: string | null, offset: number | null, partOfSet: number | null): Promise<Word[]> {
        const endpoint: string = HttpUtils.getEndpoint(
            WordService.PROVIDER,
            BackendApi.WORD_GET
        );

        const bodyRequest = this.prepareBody(search, offset, partOfSet);

        const res = await fetch(endpoint, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://localhost:7162'
            },
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
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://localhost:7162'
            }
        });

        const json = await res.json();
        return json as number;
    }

    public static prepareBody(search: string | null, offset: number | null, partOfSet: number | null): BodyInit | undefined {
        var json : BodyRequest = {
            name: [],
            offset,
            partOfSet
        };
        
        if (search !== null) {
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
