import { useState } from "react";
import {Theme, useTheme} from "../../hooks/useTheme";
import styles from './SwitchTheme.module.scss'

export const SwitchTheme = () => {
  const {theme, setTheme} = useTheme();
  const [checked, setChecked] = useState(theme === Theme.LIGHT)

  const handleChange = () =>{
    setChecked(!checked)
    setTheme(checked ? Theme.DARK: Theme.LIGHT)
  }

  return (
    <div className={styles.switch}>
      <input type="checkbox" checked={checked} onChange={handleChange} id="switch" className={styles.input}/><label className={styles.label} htmlFor="switch"></label>
    </div>
  )
}