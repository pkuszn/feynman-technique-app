import { WordService } from '../../services/WordService'
import './style-corpus.css'

interface ICorpusWindowState {
  isWindowOpen: boolean
  setFormOpen: (state: boolean) => void
}

const CorpusForm: React.FC<ICorpusWindowState> = ({isWindowOpen, setFormOpen}: ICorpusWindowState) => {
  const formHandler = () => {
    setFormOpen(!isWindowOpen)
  }

  const addWordHandler = async () => {
    let wordHandle: HTMLInputElement = document.getElementById("corpus_window__content_form_input") as HTMLInputElement
    let word: string = wordHandle.value;
    alert(word)
    if (word === undefined || word === null || word === "") {
      alert("Error occured. A word cannot be inserted to database")
      setFormOpen(!isWindowOpen)
      return;
    }

    await WordService.insertWordAsync([word])
  }

  return (
    <div>
      {isWindowOpen && (
        <div className="corpus_window">
          <div className="corpus_window__content">
            <div className="corpus_window__content_form">
              <span className='corpus_window__content_form_header'>Dodaj nowe słowo</span>
              <div className='corpus_window__content_form_actions'>
                <div className='content_window__content_form_inputs'>
                  <input id='corpus_window__content_form_input'/>
                </div>
                <div className="corpus_window__content_form_buttons">
                  <button className='button-10' id='corpus_window__content_form_submit' onClick={addWordHandler}>Zapisz</button>
                  <button className='button-10' id='corpus_window__content_form_return' onClick={formHandler}>Powrót</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CorpusForm