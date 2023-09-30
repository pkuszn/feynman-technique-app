import React, { useState } from "react";
import "./style-corpus.css";
import CorpusTable from "./CorpusTable";
import CorpusPaginationPanel from "./CorpusPaginationPanel";

interface ISessionState {
    sessionEstablished: boolean
    amountOfEntries: number
}

const CorpusBody: React.FC<ISessionState> = ({
    sessionEstablished,
    amountOfEntries
}: ISessionState) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [showNumberOfEntries, setShowNumberOfEntries] = useState<number>(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [page, setPage] = useState(1);
    const [isAdd, setAdd] = useState(false);

    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const showAmountOfEntriesHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setShowNumberOfEntries(Number(event.target.value));
    }

    const handlePageChange = (selectedPage: number) => {
        setCurrentPage(selectedPage);
      };

    const addWordHandler = () => {
        setAdd(true);
    };

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
                            <select onChange={(e) => showAmountOfEntriesHandler(e)}>
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
                            onChange={(e) => searchHandler(e)}
                        ></input>
                    </div>
                </div>
                <CorpusTable
                    sessionEstablished={sessionEstablished}
                    showNumberOfEntries={showNumberOfEntries}
                    currentPage={page}
                    searchValue={searchValue}/>
                <div className="corpus_table__component-pagination">
                    <div className="corpus_table__component-pagination-left">
                        <div className="corpus_table__component-pagination-left-paragraphs">
                            <p>Pokazano od </p>
                            <p>Liczba słów: <b>{amountOfEntries}</b></p>
                        </div>
                    </div>
                    <div className="corpus_table__component-right">
                        <div className="corpus_table__component_pagination-container">
                        <CorpusPaginationPanel totalItems={amountOfEntries} itemsPerPage={showNumberOfEntries} onPageChange={handlePageChange} />
                        </div>
                    </div>
                </div>

                <div className="corpus_table__component-bottom">
                    <div className="corpus_table__component-bottom-add-word-button">
                        <button
                            onClick={() => addWordHandler()}
                            className="corpus_table__component-add-button">
                            Dodaj słowo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorpusBody;
