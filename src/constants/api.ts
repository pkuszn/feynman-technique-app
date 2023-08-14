class BackendApi {
    public static LINGUISTIC_CORPUS_FILLMENT: string =
        "/LinguisticCorpusFillment";

    public static SERVICE_UTILITIES: string = "/ServiceUtilities";
    public static SERVICE_UTILITIES_DUPLICATES: string =
        "/ServiceUtilities/duplicates";

    public static USER_MANAGEMENT: string = "/UserManagement";
    public static USER_MANAGEMENT_AUTHENTICATE: string =
        "/UserManagement/authenticate";

    public static PART_OF_SPEECH: string = "/PartOfSpeech";
    public static PART_OF_SPEECH_ALL: string = "/PartOfSpeech/all";
    public static PART_OF_SPEECH_GET: string = "/PartOfSpeech/get";
    public static PART_OF_SPEECH_COUNT: string = "/PartOfSpeech/count";

    public static ROLE: string = "/Role";
    public static ROLE_GET: string = "/Role/get";
    public static ROLE_ALL: string = "/Role/all";
    public static ROLE_COUNT: string = "/Role/count";

    public static USER: string = "/User";
    public static USER_ALL: string = "/User/all";
    public static USER_GET: string = "/User/get";
    public static USER_BULK: string = "/User/bulk";
    public static USER_COUNT: string = "/User/count";

    public static WORD: string = "/Word";
    public static WORD_ALL: string = "/Word/all";
    public static WORD_GET: string = "/Word/get";
    public static WORD_BULK: string = "/Word/bulk";
    public static WORD_COUNT: string = "/Word/count";
}

class CoreApi {
    public static ANALYZE: string = "/analyze";
    public static ANALYZE_SPEECHES: string = "/analyze/speeches";
    public static ANALYZE_WORDS: string = "/analyze/words";
}

class ScraperApi {
    public static SCRAP: string = "/scrap";
    public static SCRAP_MANY: string = "/scrap/many";
}

export { BackendApi, CoreApi, ScraperApi };
