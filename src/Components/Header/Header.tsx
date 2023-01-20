import {SwitchTheme} from "../UI/SwitchTheme";
import styles from './Header.module.scss'
import {Indicators} from "../Indicators/Indicators";
import {useState} from "react";
import {SettingsMenu} from "../SettingsMenu/SettingsMenu";
import storySettings from "../../Story/storySettings";
import {observer} from "mobx-react-lite";

export const Header = observer(() => {
  const [isSettings, setIsSettings] = useState(false)

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__container}>
          <button onClick={()=>setIsSettings(!isSettings)} className={styles.btn__settings}>
            <span className={styles.btn__settings_text}>
              {storySettings.language}
            </span>
            <svg width='20' height='20' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 28.306 28.306">
              <g>
                <path d="M12.486,8.162c0.598-2.139,0.055-4.53-1.623-6.213C9.189,0.283,6.824-0.263,4.699,0.314l3.602,3.603 L7.355,7.443L3.824,8.387l-3.604-3.6c-0.574,2.127-0.027,4.49,1.645,6.162c1.748,1.751,4.271,2.266,6.477,1.547l0.021,0.02 l14.818,14.818c0.586,0.585,1.355,0.881,2.123,0.881c0.77,0,1.535-0.296,2.123-0.881c1.172-1.17,1.172-3.069,0-4.246L12.486,8.162z M25.562,26.831c-0.631,0-1.141-0.513-1.141-1.147s0.51-1.146,1.141-1.146c0.637,0,1.152,0.512,1.152,1.146 S26.199,26.831,25.562,26.831z"/>
              </g>
            </svg>
          </button>
          <SwitchTheme/>
          <Indicators/>
        </div>
      </div>
      {isSettings && <SettingsMenu/>}
    </header>
  )
})