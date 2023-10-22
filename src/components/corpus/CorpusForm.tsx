import { WordService } from "../../services/WordService";
import { BsXLg } from "react-icons/bs";
import "./style-corpus.css";

interface ICorpusWindowState {
    isWindowOpen: boolean;
    setFormOpen: (state: boolean) => void;
}

const CorpusForm: React.FC<ICorpusWindowState> = ({
    isWindowOpen,
    setFormOpen,
}: ICorpusWindowState) => {
    const formHandler = () => {
        setFormOpen(!isWindowOpen);
    };

    const addWordHandler = async () => {
        let wordHandle: HTMLInputElement = document.getElementById(
            "corpus_window__content_form_input"
        ) as HTMLInputElement;
        let word: string = wordHandle.value;
        if (word === undefined || word === null || word === "") {
            alert("Error occured. A word cannot be inserted to database");
            return;
        }
        await WordService.insertWordAsync([word]);
        setFormOpenStatusHandler();
    };

    const setFormOpenStatusHandler = () => {
        setFormOpen(!isWindowOpen);
    };

    return (
        <div>
            {isWindowOpen && (
                <div className="corpus_window">
                    <div id="corpus_window__content">
                        <div className="corpus_window_content_form_content">
                            <span className="corpus_window__content_form_header">
                                Dodaj nowe słowo
                            </span>
                            <BsXLg
                                id="corpus_window__content_form_exit"
                                onClick={setFormOpenStatusHandler}
                            />
                        </div>

                        <div className="corpus_window__content_form_actions">
                            <input id="corpus_window__content_form_input" placeholder="Wpisz słowo"/>
                            <button
                                className="button-10"
                                id="corpus_window__content_form_submit"
                                onClick={addWordHandler}
                            >
                                Zapisz
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CorpusForm;
