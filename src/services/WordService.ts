import { HttpUtils } from "../utils/HttpUtils";
import config from "../appsettings.json";
import { BackendApi } from "../constants/Api";
import { Word } from "../models/Word";

type BodyRequest = {
    name: string[];
    offset: number | null;
    partOfSet: number | null;
};

export class WordService {
    private static PROVIDER: string = config.Api.Backend.Dev;

    public static async getAllWordsAsync(): Promise<Word[]> {
        const endpoint: string = HttpUtils.getEndpoint(
            WordService.PROVIDER,
            BackendApi.WORD_ALL
        );
        try {
            const res = await fetch(endpoint, {
                method: "GET",
                headers: config.HeaderBackend,
            });
            if (res.status === 200) return (await res.json()) as Word[];
            if (res.status === 400) {
                console.log(res);
                return [] as Word[];
            }
        } catch (error) {
            console.error(error);
        }
        return [] as Word[];
    }

    public static async getWordAsync(id: number): Promise<Word> {
        const endpoint: string = HttpUtils.getEndpointSpecific(
            WordService.PROVIDER,
            BackendApi.WORD,
            id
        );

        try {
            const res = await fetch(endpoint, {
                method: "GET",
                headers: config.HeaderBackend,
            });
            if (res.status === 200) return (await res.json()) as Word;
            if (res.status === 404) {
                console.log(res);
            }
        } catch (error) {
            console.error(error);
        }

        return {} as Word;
    }

    public static async deleteWordAsync(id: number): Promise<void> {
        const endpoint: string = HttpUtils.getEndpointSpecific(
            WordService.PROVIDER,
            BackendApi.WORD,
            id
        );
        try {
            const res = await fetch(endpoint, {
                method: "DELETE",
                headers: config.HeaderBackend,
            });
            if (res.status === 200) return;
            if (res.status === 404) {
                console.log(res);
                return;
            }
        } catch (error) {
            console.error(error);
        }
    }

    public static async getWordWhereLimitAsync(
        search: string,
        offset: number | null,
        partOfSet: number | null
    ): Promise<Word[]> {
        const endpoint: string = HttpUtils.getEndpoint(
            WordService.PROVIDER,
            BackendApi.WORD_GET
        );
        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: config.HeaderBackend,
                body: this.prepareGetWordWhereLimitBody(search, offset, partOfSet),
            });

            if (res.status === 200) return (await res.json()) as Word[];
            if (res.status === 404) {
                console.log(res);
                return [] as Word[];
            }
        } catch (error) {
            console.error(error);
        }
        return [] as Word[];
    }

    public static async getAmountOfEntriesAsync(): Promise<number> {
        const endpoint = HttpUtils.getEndpoint(
            WordService.PROVIDER,
            BackendApi.WORD_COUNT
        );

        try {
            const res = await fetch(endpoint, {
                method: "GET",
                headers: config.HeaderBackend,
            });

            if (res.status === 200) return await res.json() as number;
            if (res.status === 404) {
                console.log(res);
                return 0;
            }
        } catch (error) {
            console.error(error);
        }
        return 0;
    }

    public static async insertWordAsync(words: string[]): Promise<void> {
        const endpoint = HttpUtils.getEndpoint(
            WordService.PROVIDER,
            BackendApi.WORD
        );

        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: config.HeaderBackend,
                body: this.prepareInsertWordBody(words)
            });
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    private static prepareInsertWordBody(words: string[]): BodyInit | undefined {
        if (words === undefined || words.length === 0) {
            return undefined;
        }

        return JSON.stringify(words);
    }

    private static prepareGetWordWhereLimitBody(
        search: string,
        offset: number | null,
        partOfSet: number | null
    ): BodyInit | undefined {
        var json: BodyRequest = {
            name: [],
            offset,
            partOfSet,
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
