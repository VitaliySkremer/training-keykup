import {Icon} from "../UI/Icons/Icon";
import {Icons} from "../UI/Icons/Icons";
import styles from './Indicators.module.scss'

export const Indicators = () => {
  return (
    <div className={styles.indicators}>
      <div className={[styles.indicators,styles.speed].join(' ')}>
        <Icon icon={Icons.SPEED}/>
        --/--
      </div>
      <div className={styles.indicators}>
        <Icon icon={Icons.ERRORS}/>
        --/--
      </div>
    </div>
  )
}