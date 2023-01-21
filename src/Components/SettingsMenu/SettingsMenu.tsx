import {createPortal} from "react-dom"
import styles from './SettingsMenu.module.scss'
import {Radio} from "../UI/Radio/Radio";
import {Languages} from "../../Story/storySettings";
import {useEffect, useState} from "react";
import storySettings from "../../Story/storySettings";
import {CountParagraph} from "../CountParagraph/CountParagraph";
import {observer} from "mobx-react-lite";

export const SettingsMenu = observer(() => {
  const [language, setLanguage] = useState(storySettings.language)

  useEffect(()=>{
    storySettings.changeLanguage(language);
  }, [language])

  const node = document.getElementById('settings')
  if(!node) return null

  return createPortal((
    <div className={styles.settings}>
      <div className={styles.radio__block}>
        <Radio
          checked={language===Languages.RU}
          name={Languages.RU}
          text={Languages.RU}
          onChange={(event)=> setLanguage(Languages.RU)}
        />
        <Radio
          checked={language===Languages.EN}
          name={Languages.EN}
          text={Languages.EN}
          onChange={(event)=> setLanguage(Languages.EN)}
        />
      </div>
      <div>
        <CountParagraph title='Количество предложений' count={10} select={storySettings.countParagraph}/>
      </div>
    </div>
  ),node)
})