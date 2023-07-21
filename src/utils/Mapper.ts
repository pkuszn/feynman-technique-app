import { PartOfSpeeches, PartOfSpeechesEnum } from "../constants/PartOfSpeeches";

export class Mapper {
    private static varExtractor = new RegExp("(.*)");

    static partOfSpeechToSymbolMapper(id: PartOfSpeechesEnum): string | undefined {
        switch(id) {
            case PartOfSpeechesEnum.Inne: {
                return PartOfSpeeches.Inne
            }
            case PartOfSpeechesEnum.Rzeczownik: {
                return PartOfSpeeches.Rzeczownik
            }
            case PartOfSpeechesEnum.Przymiotnik: {
                return PartOfSpeeches.Przymiotnik
            }
            case PartOfSpeechesEnum.Liczebnik: {
                return PartOfSpeeches.Liczebnik
            }
            case PartOfSpeechesEnum.Przyslowek: {
                return PartOfSpeeches.Przyslowek
            }
            case PartOfSpeechesEnum.Czasownik: {
                return PartOfSpeeches.Czasownik
            }
            case PartOfSpeechesEnum.Zaimek: {
                return PartOfSpeeches.Zaimek
            }
            case PartOfSpeechesEnum.Przyimek: {
                return PartOfSpeeches.Przyimek
            }
            case PartOfSpeechesEnum.Spojnik: {
                return PartOfSpeeches.Spojnik
            }
            case PartOfSpeechesEnum.Punkt: {
                return PartOfSpeeches.Punkt
            }
            case PartOfSpeechesEnum.Wykrzyknik: {
                return PartOfSpeeches.Wykrzyknik
            }
            case PartOfSpeechesEnum.Partykula: {
                return PartOfSpeeches.Partykula
            }
            case PartOfSpeechesEnum.ZaimekWskazujacy: {
                return PartOfSpeeches.ZaimekWskazujacy
            }
            case PartOfSpeechesEnum.CzasownikPomocniczy: {
                return PartOfSpeeches.CzasownikPomocniczy
            }
            case PartOfSpeechesEnum.RzeczownikOdpowiedni: {
                return PartOfSpeeches.RzeczownikOdpowiedni
            }
            case PartOfSpeechesEnum.SpojnikKoordynacyjny: {
                return PartOfSpeeches.SpojnikKoordynacyjny
            }
            case PartOfSpeechesEnum.Symbol: {
                return PartOfSpeeches.Symbol
            }
            default: {
                return PartOfSpeeches.Inne
            }
        }
    }    

    static partOfSpeechToNameMapper(id: PartOfSpeechesEnum): string | undefined {
        return PartOfSpeechesEnum[id];
    }

    static variableNameExtractor<TResult>(getVariable: () => TResult): string {
        var member: RegExpExecArray | null = this.varExtractor.exec(getVariable + "");
        if (member === null) {
            throw new Error("The function does not contain a statement matching 'return'");
        }

        var fullMemberName: string = member[1];
        var memberParts = fullMemberName.split('.');

        return memberParts[memberParts.length - 1];
    }
}
