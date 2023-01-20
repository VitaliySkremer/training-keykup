import {InputHTMLAttributes} from "react";
import styles from './Radio.module.scss'
interface IRadioProps extends InputHTMLAttributes<HTMLInputElement>{
  text: String;
}

export const Radio = ({text,...other}:IRadioProps) => {
  return (
    <label>
      <input {...other} type='radio' className={styles.radio}/>
      <span className={styles.text}>
        {text}
      </span>
    </label>
  )
}