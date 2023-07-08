import React, { useState } from "react";
import "./style-corpus.css";
import { Word } from "../../models/Word";
interface IState {
    loading: boolean;
    words: Word[];
    errorMessage: string;
}

const CorpusTable: React.FC<IState> = ({
    loading,
    words,
    errorMessage,
}: IState) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const data = {
        nodes: words.filter((word) =>
            word.name.toLowerCase().includes(searchValue.toLowerCase())
        ),
    };

    return (
        <div className="corpus_table__component">
            <h3 id="corpus_table__component-text">Korpus językowy aplikacji</h3>
            <input
                id="corpus_table__component_search-input"
                placeholder="Szukaj słów"
                onChange={searchHandler}
            ></input>
            <table className="corpus_table__component-data">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>partOfSpeech</th>
                        <th>createdDate</th>
                        <th>context</th>
                        <th>link</th>
                    </tr>
                </thead>
                <tbody>
                    {data.nodes.map((node) => (
                        <tr key={node.id}>
                            <td>{node.id}</td>
                            <td>{node.name}</td>
                            <td>{node.partOfSpeech}</td>
                            <td>{node.createdDate.toISOString()}</td>
                            <td>{node.context}</td>
                            <td>{node.link}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CorpusTable;
