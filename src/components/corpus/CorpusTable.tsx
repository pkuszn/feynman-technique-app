import React, { useEffect, useState } from "react";
import "./style-corpus.css";
import { Word } from "../../models/Word";
import { Mapper } from "../../utils/Mapper";
import { TailSpin } from "react-loader-spinner";
import { WordService } from "../../services/WordService";
import { debug } from "console";

interface IState {
    loading: boolean;
    words: Word[];
    errorMessage: string;
}

interface IDebugState {
    debugWords: Word[];
}

const CorpusTable: React.FC<IState> = ({
    loading,
    words,
    errorMessage,
}: IState) => {
    const debugData = {
        node: [
            {
                id: 1,
                name: "dupa",
                partOfSpeech: 1,
                createdDate: "2023-06-01 00:00:00",
                context: "scraper",
                link: "localhost",
            },
            {
                id: 2,
                name: "a",
                partOfSpeech: 61,
                createdDate: "2022-06-01 00:00:00",
                context: "scraper",
                link: "localhost",
            },
            {
                id: 3,
                name: "b",
                partOfSpeech: 1,
                createdDate: "1999-06-01 00:00:00",
                context: "asd",
                link: "x",
            },
            {
                id: 4,
                name: "c",
                partOfSpeech: 5,
                createdDate: "2023-06-01 00:00:00",
                context: "scraper",
                link: "localhost",
            },
            {
                id: 5,
                name: "d",
                partOfSpeech: 1,
                createdDate: "2023-06-01 00:00:00",
                context: "scraper",
                link: "localxxhost",
            },
            {
                id: 6,
                name: "e",
                partOfSpeech: 1,
                createdDate: "2023-06-01 00:00:00",
                context: "scraper",
                link: "localhost",
            },
            {
                id: 7,
                name: "f",
                partOfSpeech: 11,
                createdDate: "2223-06-01 00:00:00",
                context: "ds",
                link: "localhost",
            },
            {
                id: 8,
                name: "hg",
                partOfSpeech: 1,
                createdDate: "2023-06-01 00:00:00",
                context: "scraper",
                link: "localhost",
            },
        ],
    };

    const [searchValue, setSearchValue] = useState<string>("");
    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const [isEdit, setEdit] = useState(false);
    const [debugWords, setWords] = useState<IDebugState>({ debugWords: [] });
    const [isAdd, setAdd] = useState(false);

    const data = {
        nodes: words.filter((word) =>
            word.name.toLowerCase().includes(searchValue.toLowerCase())
        ),
    };

    useEffect(() => {
        setWords({ debugWords: debugData.node });
    });

    const deleteWordHandler = async (id: number) => {
        if (id === 0) {
            return;
        }
        deleteDebugWordHandler(id);
        // await WordService.deleteWordAsync(id);
    };

    const deleteDebugWordHandler = (id: number) => {
        if (id === 0) {
            return;
        }

        debugData.node = debugData.node.filter((f) => f.id !== id);
        setWords({ debugWords: debugData.node });
    };

    const addWordHandler = () => {
        setAdd(true);
        alert("test");
    };

    return (
        <div className="corpus_table__component">
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
            )}
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
                {loading ? (
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
                            {debugWords.debugWords.map((node) => (
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
                <div className="corpus_table__component-pagination corpus_table__component-blur">
                    <div className="corpus_table__component-pagination-left">
                        <p>Pokazano od </p>
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
