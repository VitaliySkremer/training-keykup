import {Icon} from "../UI/Icons/Icon";
import {Icons} from "../UI/Icons/Icons";
import styles from './Indicators.module.scss'
import {observer} from "mobx-react-lite";
import storyKey from "../../Story/storyKey";
import {useEffect, useState} from "react";

export const Indicators = observer(() => {

  const [seconds, setSeconds] = useState(0);
  const [numPerMinutes, setNumPerMinutes] = useState(0);

  useEffect(()=>{
    let timer:ReturnType<typeof setInterval>;
    if(storyKey.start){
      setNumPerMinutes(0);
      timer = setInterval(()=>{
        setSeconds(prevState => prevState + 1)
        if(!storyKey.start){
          clearInterval(timer);
          setSeconds(0)
        }
      }, 1000)
    }
  }, [storyKey.start])

  useEffect(()=>{
    if(seconds!==0){
      const time = seconds / 60
      const CPM = (storyKey.correctPressing + storyKey.errorPressing)/time;
      setNumPerMinutes(Math.round(CPM - (storyKey.errorPressing / time)));
    }
  }, [seconds])

  return (
    <div className={styles.indicators}>
      <div className={[styles.indicators,styles.speed].join(' ')}>
        <Icon icon={Icons.SPEED}/>
        {numPerMinutes} знака в мин
      </div>
      <div className={styles.indicators}>
        <Icon icon={Icons.ERRORS}/>
        {storyKey.errorPressing}
      </div>
    </div>
  )
})