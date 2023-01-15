import {SwitchTheme} from "../UI/SwitchTheme";
import styles from './Header.module.scss'
import {Indicators} from "../Indicators/Indicators";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__container}>
          <div>Русский</div>
          <SwitchTheme/>
          <Indicators/>
        </div>
      </div>
    </header>
  )
}