import React, { useEffect, useState } from "react";
import "./style-corpus.css";
import { Word } from "../../models/Word";
import { Mapper } from "../../utils/Mapper";
import { TailSpin } from "react-loader-spinner";
import { WordService } from "../../services/WordService";

interface ISessionState {
    sessionEstablished: boolean
    amountOfEntries: number
}

interface IContentState {
    loading: boolean,
    words: Word[],
    errorMessage: string | null
}

const CorpusTable: React.FC<ISessionState> = ({
    sessionEstablished,
    amountOfEntries
}: ISessionState) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [state, setWords] = useState<IContentState>({
        loading: false,
        words: [],
        errorMessage: ""
    });
    const [page, setPage] = useState(1);
    const [isEdit, setEdit] = useState(false);
    const [isAdd, setAdd] = useState(false);

    useEffect(() => {
        if (sessionEstablished) {
            setWords({ ...state, loading: true });
            WordService.getWordWhereLimitAsync(null, 25, page)
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

    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const data = {
        nodes: state.words.filter((word) =>
            word.name.toLowerCase().includes(searchValue.toLowerCase())
        ),
    };

    const deleteWordHandler = async (id: number) => {
        if (id === 0) {
            return;
        }
        await WordService.deleteWordAsync(id);
    };

    const addWordHandler = () => {
        setAdd(true);
        alert("test");
    };

/*


Dodanie słowa
 {isAdd ? (
                <div className="aa">
                    <p>fałsz</p>
                </div>
            ) : (
                <div className="corpus_table__component-center corpus_table__component-add-word ">
                    <p className="corpus_table__component-add-word-header">
                        Dodaj nowe słowo do korpusu
                    </p>
                    <form
                        method="POST"
                        className="corpus_table__component-add-word-form"
                    >
                        <input className="corpus_table__component-add-word-input" />
                        <button>Wyślij</button>
                    </form>
                </div>
*/

    return (
        <div className="corpus_table__component">
            <div className="corpus_table__component-inner">
                <h3 id="corpus_table__component-text">
                    Korpus językowy aplikacji
                </h3>
                <div className="corpus_table__component-search-entries ">
                    <span className="corpus_table__component-search-entries-left ">
                        <label>
                            Pokaż{" "}
                            <select>
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>25</option>
                                <option>50</option>
                                <option>100</option>
                            </select>{" "}
                            słów
                        </label>
                    </span>
                    <div className="corpus_table__component-search-entries-right ">
                        <input
                            id="corpus_table__component_search-input"
                            placeholder="Szukaj słów"
                            onChange={searchHandler}
                        ></input>
                    </div>
                </div>
                {state.loading ? (
                    <div className="corpus_table__component-center">
                        <TailSpin
                            height="80"
                            width="80"
                            color="#135fec"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                ) : (
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
                                        {Mapper.partOfSpeechToNameMapper(
                                            node.partOfSpeech
                                        )}
                                    </td>
                                    <td>{node.createdDate}</td>
                                    <td>{node.context}</td>
                                    <td>{node.link}</td>
                                    <td>
                                        <div className="corpus_table__component-data-table-action">
                                            <button
                                                onClick={() =>
                                                    deleteWordHandler(node.id)
                                                }
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
                )}
                <div className="corpus_table__component-pagination">
                    <div className="corpus_table__component-pagination-left">
                        <div className="corpus_table__component-pagination-left-paragraphs">
                            <p>Pokazano od </p>
                            <p>Liczba słów {amountOfEntries}</p>
                        </div>
                    </div>
                    <div className="corpus_table__component-right">
                        <p>Paginacja</p>
                    </div>
                </div>

                <div className="corpus_table__component-bottom">
                    <div className="corpus_table__component-bottom-add-word-button">
                        <button
                            onClick={() => addWordHandler()}
                            className="corpus_table__component-add-button"
                        >
                            Dodaj słowo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorpusTable;
