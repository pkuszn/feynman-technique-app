import React, { useEffect, useState } from "react";
import "./style-corpus.css";
import CorpusBody from "./CorpusBody";
import { WordService } from "../../services/WordService";

const CorpusView: React.FC = () => {

    const [isSessionActive, setSessionActive] = useState<boolean>(false);
    const [length, setLength] = useState<number>(0);

    const sessionHandler = () => {
        const user: string | null = sessionStorage.getItem("name");
        if (user !== null) {
            setSessionActive(true);
        }
    }

    const amountOfEntriesHandler = async () => {
        let length: number = await WordService.getAmountOfEntriesAsync();
        setLength(length);
    }

    useEffect(() => {
        sessionHandler();
        amountOfEntriesHandler();
    })

    return (
        isSessionActive 
            ? <CorpusBody sessionEstablished={isSessionActive} amountOfEntries={length}/> 
            : <div><p>Sesja nie została ustanowiona!</p></div>
    );
};

export default CorpusView;
