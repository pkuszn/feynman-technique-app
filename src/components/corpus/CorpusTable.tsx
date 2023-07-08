import React, { useState } from "react";
import "./style-corpus.css";
import { AiOutlineSearch } from "react-icons/ai";

const CorpusTable: React.FC = () => {
  const [words, setWords] = useState([
    {
      id: 1,
      name: "dupa",
      partOfSpeech: 1,
      createdDate: "2023-06-01 00:00:00",
      context: "scraper",
      link: "localhost",
    },
    {
      id: 1,
      name: "a",
      partOfSpeech: 61,
      createdDate: "2022-06-01 00:00:00",
      context: "scraper",
      link: "localhost",
    },
    {
      id: 1,
      name: "b",
      partOfSpeech: 1,
      createdDate: "1999-06-01 00:00:00",
      context: "asd",
      link: "x",
    },
    {
      id: 1,
      name: "c",
      partOfSpeech: 5,
      createdDate: "2023-06-01 00:00:00",
      context: "scraper",
      link: "localhost",
    },
    {
      id: 1,
      name: "d",
      partOfSpeech: 1,
      createdDate: "2023-06-01 00:00:00",
      context: "scraper",
      link: "localxxhost",
    },
    {
      id: 1,
      name: "e",
      partOfSpeech: 1,
      createdDate: "2023-06-01 00:00:00",
      context: "scraper",
      link: "localhost",
    },
    {
      id: 1,
      name: "f",
      partOfSpeech: 11,
      createdDate: "2223-06-01 00:00:00",
      context: "ds",
      link: "localhost",
    },
    {
      id: 1,
      name: "hg",
      partOfSpeech: 1,
      createdDate: "2023-06-01 00:00:00",
      context: "scraper",
      link: "localhost",
    },
  ]);

  const [searchValue, setSearchValue] = useState<string>("");

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const data = {
    nodes: words.filter((word) => word.name.toLowerCase().includes(searchValue.toLowerCase())),
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
              <td>{node.createdDate}</td>
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
