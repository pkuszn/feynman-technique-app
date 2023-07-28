import React, { useEffect, useState } from "react";
import "./style-corpus.css";
import { Word } from "../../models/Word";
import { WordService } from "../../services/WordService";
import CorpusTable from "./CorpusTable";

interface IState {
    loading: boolean;
    words: Word[];
    errorMessage: string;
}

const CorpusView: React.FC = () => {
    const [state, setState] = useState<IState>({
        loading: false,
        words: [] as Word[],
        errorMessage: "",
    });

    const sessionHandler = () => {
        const user: string | null = sessionStorage.getItem("name");
        if (user !== null) {
            setSessionActive(true);
        }
    }

    const [isSessionActive, setSessionActive] = useState<boolean>(false);
    useEffect(() => {
        sessionHandler();
        if (isSessionActive) {
            setState({ ...state, loading: true });
            WordService.getAllWordsAsync()
                .then((res: any) => {
                    setState({
                        ...state,
                        loading: false,
                        words: res,
                    });
                })
                .catch((err: any) => {
                    setState({
                        ...state,
                        loading: false,
                        errorMessage: err.message,
                    });
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        isSessionActive ?
        <CorpusTable
            loading={state.loading}
            words={state.words}
            errorMessage={state.errorMessage}
        /> : ""
    );
};

export default CorpusView;
