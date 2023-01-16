import styles from './Main.module.scss'
import {Input} from "../UI/Input/Input";
import {useEffect, useRef, useState} from "react";
import {KeyBoard} from "../KeyBoard/KeyBoard";
export const Main = () => {
  const [text, setText] = useState('')
  const [sucText, setSucText] = useState('')
  const [inputText, setInputText] = useState('')
  const [dx, setDx] = useState(0);
  const [error, setError] = useState(false)

  useEffect(()=>{
    async function getText(){
      const response = await fetch('https://fish-text.ru/get?number=1&format=JSON')
      const data = await response.text();
      setText(JSON.parse(data).text);
    }
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
  }

  const keyPress = (event: React.KeyboardEvent<HTMLInputElement>)=>{
    const value = event.key;
    if (value === text){
      alert('Гуд ворк')
    }
    else if(!text.startsWith(value)){
      setError(true);
      setTimeout(()=>{
        setError(false);
      },300)
      event.preventDefault();
    }
  }

  const keyDown = (event: React.KeyboardEvent<HTMLInputElement>) =>{
    const key = event.key;
    if(key === 'Backspace' || key === 'Delete'){
      const newValue = sucText.slice(-1)
      setText(prevState => newValue + newValue + prevState)
    }
  }

  return (
    <main className={styles.main}>
      <div className='container'>
        <Input
          value={inputText}
          onChange={changeInput}
          onKeyPress={keyPress}
          onKeyDown={keyDown}
        />
        <div className={styles.text__block}>
          <p
            className={[styles.success, styles.text].join(' ')}
            style={{transform:`translateX(-${dx}px)`, whiteSpace:'pre'}}
            dangerouslySetInnerHTML={{__html:sucText}}
          >
          </p>
          <p style={{transform:`translateX(-${dx}px)`, whiteSpace:'pre'}}
             className={[error?styles.error:'', styles.text].join(' ')}
             dangerouslySetInnerHTML={{__html: text}}
          >
          </p>
        </div>
        <KeyBoard/>
      </div>
    </main>
  )
}