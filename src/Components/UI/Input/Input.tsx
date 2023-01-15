import {InputHTMLAttributes} from "react";
import styles from './Input.module.scss'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
}

export const Input = ({...other}:IInputProps) => {
  return (
    <input {...other} className={styles.input}></input>
  )
}