import styles from './Main.module.scss'
import {Input} from "../UI/Input/Input";
import {useEffect, useState} from "react";
import {KeyBoard} from "../KeyBoard/KeyBoard";
export const Main = () => {
  const [text, setText] = useState('')
  const [sucText, setSucText] = useState('')
  const [inputText, setInputText] = useState('')
  const [dx, setDx] = useState(0);
  const [error, setError] = useState(false)

  async function getText(){
    const response = await fetch('https://fish-text.ru/get?number=1&format=JSON')
    const data = await response.text();
    setText(JSON.parse(data).text);
  }

  useEffect(()=>{
    getText();
  },[])

  useEffect(()=>{
    if(inputText.length>50){
      setDx(prevState => (inputText.length - 50) * 7)
    }
    else setDx(0)

  },[inputText])

  const changeInput = (event: React.FormEvent<HTMLInputElement>) =>{
    setInputText(event.currentTarget.value)
    setSucText(event.currentTarget.value)
    setText(text.substring(1))
    if (text.length === 1){
      setInputText('');
      getText();
      setSucText('');
    }
  }

  const keyDown = (event: React.KeyboardEvent<HTMLInputElement>) =>{
    const key = event.key;
    if(key === 'Backspace' || key === 'Delete'){
      event.preventDefault();
    }
    if(!text.startsWith(key)){
      setError(true);
      setTimeout(()=>{
        setError(false);
      },300)
      event.preventDefault();
    }

  }

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
}