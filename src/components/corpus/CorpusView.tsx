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

    // useEffect(() => {
    //     setState({ ...state, loading: true });
    //     WordService.getAllWordsAsync()
    //         .then((res: any) => {
    //             setState({
    //                 ...state,
    //                 loading: false,
    //                 words: res,
    //             });
    //         })
    //         .catch((err: any) => {
    //             setState({
    //                 ...state,
    //                 loading: false,
    //                 errorMessage: err.message,
    //             });
    //         });

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return <CorpusTable loading={state.loading} words={state.words} errorMessage={state.errorMessage} />;
};

export default CorpusView;
