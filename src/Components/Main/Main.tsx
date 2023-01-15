import styles from './Main.module.scss'
import {Input} from "../UI/Input/Input";
import {useEffect, useState} from "react";
export const Main = () => {
  const [text, setText] = useState('')
  // const [text1, setText1] = useState('')
  const [inputText, setInputText] = useState('')
  const [dx, setDx] = useState(0);
  const [error, setError] = useState(false);

  useEffect(()=>{
    async function test(){
      const response = await fetch('https://fish-text.ru/get?number=5&format=JSON')
      const data = await response.text();
      setText(JSON.parse(data).text);
    }
    test();
  },[])

  useEffect(()=>{
    if(!text.startsWith(inputText)) {
      setError(true);
      setInputText(inputText.slice(0,-1))
      setTimeout(()=>{
        setError(false);
      },300)
    }
    else {

    }

    if(inputText.length>50){
      setDx(prevState => (inputText.length - 50) * 7)
    }
    else setDx(0)
  },[inputText])

  const changeInput = (event: React.FormEvent<HTMLInputElement>) =>{
    setInputText(event.currentTarget.value)
  }

  return (
    <main className={styles.main}>
      <div className='container'>
        <Input
          type='text'
          value={inputText}
          onChange={changeInput}
        />
        <div className={styles.text__block}>
          <p style={{transform:`translateX(-${dx}px)`}} className={error?styles.error:''}>
            {/*{text1}*/}
            {text}
          </p>
        </div>
      </div>
    </main>
  )
}