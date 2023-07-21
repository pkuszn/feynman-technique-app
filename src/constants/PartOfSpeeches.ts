class PartOfSpeeches {
    public static Inne = "X";
    public static Rzeczownik = "NOUN";
    public static Przymiotnik = "ADJ";
    public static Liczebnik = "NUM";
    public static Przyslowek = "ADV";
    public static Czasownik = "VERB";
    public static Zaimek = "PRON";
    public static Przyimek = "ADP";
    public static Spojnik = "SCONJ";
    public static Punkt = "PUNCT";
    public static Wykrzyknik = "INTJ";
    public static Partykula = "PART";
    public static ZaimekWskazujacy = "DET";
    public static CzasownikPomocniczy = "AUX";
    public static RzeczownikOdpowiedni = "PROPN";
    public static SpojnikKoordynacyjny = "CCONJ";
    public static Symbol = "SYM";
}

enum PartOfSpeechesEnum {
    Inne = 0,
    Rzeczownik = 1,
    Przymiotnik = 2,
    Liczebnik = 3,
    Przyslowek = 4,
    Czasownik = 5,
    Zaimek = 6,
    Przyimek = 7,
    Spojnik = 8,
    Punkt = 9,
    Wykrzyknik = 10,
    Partykula = 11,
    ZaimekWskazujacy = 12,
    CzasownikPomocniczy = 13,
    RzeczownikOdpowiedni = 14,
    SpojnikKoordynacyjny = 15,
    Symbol = 16
}

export {
    PartOfSpeeches,
    PartOfSpeechesEnum
}