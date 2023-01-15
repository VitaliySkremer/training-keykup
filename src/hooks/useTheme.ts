import {useLayoutEffect, useState} from "react"

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}

export const useTheme = () =>{
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || Theme.LIGHT)

  useLayoutEffect(()=>{
    document.documentElement.setAttribute('data-theme',theme);
    localStorage.setItem('app-theme', theme);
  },[theme])

  return {theme, setTheme};
}