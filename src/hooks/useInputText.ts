import {useEffect, useState} from "react";
import storyKey from "../Story/storyKey";
import storySettings, {Languages} from "../Story/storySettings";
// @ts-ignore
import translate from 'translate'

enum localLanguage {
  RU = 'ru',
  EN = 'en'
}

export const useInputText = () =>{
  const [text, setText] = useState('')
  const [sucText, setSucText] = useState('')
  const [inputText, setInputText] = useState('')
  const [dx, setDx] = useState(0);
  const [error, setError] = useState(false)

  const translateText = async (text: string) =>{
    if(storySettings.language === Languages.RU){
      translate.from = localLanguage.EN;
      setText(await translate(text, localLanguage.RU));
    }
    else {
      translate.from = localLanguage.RU;
      setText(await translate(text, localLanguage.EN));
    }
  }

  async function getText(){
    const response = await fetch(`https://fish-text.ru/get?number=${storySettings.countParagraph}&format=JSON`)
    const data = await response.text();
    if(JSON.parse(data).text){
      translateText(JSON.parse(data).text);
    }
  }

  useEffect(()=>{
    getText()
    setSucText('');
    setInputText('');
    storyKey.stopTimer();
  },[storySettings.language, storySettings.countParagraph])

  useEffect(()=>{
    getText();
  },[])

  useEffect(()=>{
    if(inputText.length>50){
      setDx(prevState => (inputText.length - 50) * 7.7)
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
      storyKey.stopTimer();
    }
  }

  const keyDown = (event: React.KeyboardEvent<HTMLInputElement>) =>{
    const key = event.key;
    if(key.length > 1){
      event.preventDefault();
      return;
    }
    if(!text.startsWith(key)){
      storyKey.addErrorPressing()
      setError(true);
      setTimeout(()=>{
        setError(false);
      },300)
      event.preventDefault();
      return;
    }
    storyKey.addCorrectPressing()
    if(!storyKey.start){
      storyKey.resetKey();
    }
    storyKey.startTimer();
  }

  return {
    inputText,
    changeInput,
    keyDown,
    dx,
    sucText,
    error,
    text
  }
}