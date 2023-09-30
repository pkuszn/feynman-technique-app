import React, { useEffect, useState } from "react";
import { Word } from "../../models/Word";
import { WordService } from "../../services/WordService";
import { Mapper } from "../../utils/Mapper";

interface ISessionState {
    sessionEstablished: boolean
    amountOfEntries: number,
    showAmountOfEntries: number,
    currentPage: number,
    searchValue: string
}
interface IContentState {
    loading: boolean,
    words: Word[],
    errorMessage: string | null
}

const CorpusTable: React.FC<ISessionState> = ({
    sessionEstablished,
    amountOfEntries,
    showAmountOfEntries,
    currentPage,
    searchValue
}: ISessionState) => {

    const [state, setWords] = useState<IContentState>({
        loading: false,
        words: [],
        errorMessage: ""
    });
    
    useEffect(() => {
        if (sessionEstablished) {
            setWords({ ...state, loading: true });
            WordService.getWordWhereLimitAsync(searchValue, showAmountOfEntries, currentPage)
                .then((res: any) => {
                    setWords({
                        ...state,
                        loading: false,
                        words: res,
                        errorMessage: null
                    });
                })
                .catch((err: any) => {
                    setWords({
                        ...state,
                        loading: false,
                        words: [],
                        errorMessage: err.message,
                    });
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const deleteWordHandler = async (id: number) => {
        if (id === 0) {
            return;
        }
        await WordService.deleteWordAsync(id);
    };

    return (
        <table className="corpus_table__component-data">
            <thead className="">
                <tr>
                    <th id="id">id</th>
                    <th>name</th>
                    <th>partOfSpeech</th>
                    <th>partOfSpeechSymbol</th>
                    <th>partOfSpeechName</th>
                    <th>createdDate</th>
                    <th>context</th>
                    <th>link</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {state.words.map((node) => (
                    <tr key={node.id}>
                        <td>{node.id}</td>
                        <td>{node.name}</td>
                        <td>{node.partOfSpeech}</td>
                        <td>
                            {Mapper.partOfSpeechToSymbolMapper(
                                node.partOfSpeech
                            )}
                        </td>
                        <td>
                            {Mapper.partOfSpeechToNameMapper(node.partOfSpeech)}
                        </td>
                        <td>{node.createdDate}</td>
                        <td>{node.context}</td>
                        <td>{node.link}</td>
                        <td>
                            <div className="corpus_table__component-data-table-action">
                                <button
                                    onClick={() => deleteWordHandler(node.id)}
                                    className="corpus_table__component-data-table-action-table-delete"
                                >
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CorpusTable;
