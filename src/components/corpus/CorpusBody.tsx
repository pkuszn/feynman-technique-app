import React, { useState } from "react";
import "./style-corpus.css";
import CorpusTable from "./CorpusTable";
import CorpusPaginationPanel from "./CorpusPaginationPanel";
import { SlPlus } from "react-icons/sl";
import CorpusForm from "./CorpusForm";


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
    const [pageRange, setPageRange] = useState(`1-${showNumberOfEntries}`)
    const [isFormOpen, setFormOpen] = useState(false);
    const totalPages = Math.ceil(amountOfEntries / showNumberOfEntries);

    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const showAmountOfEntriesHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setShowNumberOfEntries(Number(event.target.value));
    }

    const handlePageChange = (selectedPage: number) => {
        setPageRange(determineScope(selectedPage, showNumberOfEntries));
        setCurrentPage(selectedPage);
      };

      //TODO: Fix!
    const determineScope = (currentPage: number, showNumberOfEntries: number) => {
        let startRange = currentPage <= 1 ? 1 : showNumberOfEntries * (currentPage - 1);
        let endRange = currentPage <= 0 ? showNumberOfEntries : showNumberOfEntries * currentPage;
        return `${startRange}-${endRange}`;
    } 

    const showAddNewEntryWindow = () => {
        setFormOpen(!isFormOpen);
    }
    
    return (
        <div className={`corpus_table__component`}>
            <CorpusForm isWindowOpen={isFormOpen} setFormOpen={setFormOpen}/>
            <div className={`corpus_table__component-inner ${isFormOpen ? 'blurred' : ''}`}>
                <h3 id="corpus_table__component-text">
                    Korpus językowy aplikacji
                </h3>
                <div className="corpus_table__component-search-entries">
                    <span className="corpus_table__component-search-entries-left">
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
                    <div className="corpus_table__component-search-entries-right">
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
                    currentPage={currentPage}
                    searchValue={searchValue}/>
                <div className="corpus_table__component-pagination">
                    <div className="corpus_table__component-pagination-left">
                        <div className="corpus_table__component-pagination-left-paragraphs">
                            <p>Pokazano od: <b>{pageRange}</b> </p>
                            <p>Liczba słów: <b>{amountOfEntries}</b></p>
                        </div>
                    </div>
                    <div className="corpus_table__component-right">
                        <div className="corpus_table__component_pagination-container">
                        <CorpusPaginationPanel totalPages={totalPages} onPageChange={handlePageChange} />
                        <div id="corpus_table__component_search-add-word-button">
                            <SlPlus size={30} onClick={showAddNewEntryWindow}
                            color="#172b4d"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorpusBody;
