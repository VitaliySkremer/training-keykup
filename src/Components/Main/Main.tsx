import styles from './Main.module.scss'
import {Input} from "../UI/Input/Input";
import {KeyBoard} from "../KeyBoard/KeyBoard";
import {useInputText} from "../../hooks/useInputText";
import {observer} from "mobx-react-lite";

export const Main = observer(() => {

  const {inputText,
    changeInput,
    keyDown,
    dx,
    sucText,
    error,
    text} = useInputText();

  return (
    <main className={styles.main}>
      <div className='container'>
        <Input
          value={inputText}
          onChange={changeInput}
          onKeyDown={keyDown}
        />
        <div className={styles.text__block}>
          <p
            className={[styles.success, styles.text].join(' ')}
            style={{transform:`translateX(-${dx}px)`, whiteSpace:'pre'}}
          >
            {sucText}
          </p>
          <p style={{transform:`translateX(-${dx}px)`, whiteSpace:'pre'}}
             className={[error?styles.error:'', styles.text].join(' ')}
          >
            {text}
          </p>
        </div>
        <KeyBoard/>
      </div>
    </main>
  )
})