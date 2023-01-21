import styles from './CountParagraph.module.scss'
import storySettings from "../../Story/storySettings";

interface ICountParagraphProps {
  title:string;
  count: number;
  select:number;
}

export const CountParagraph = ({title,count,select}:ICountParagraphProps) => {

  const clickHandle = (count:number) =>{
    storySettings.changeCountParagraph(count)
  }

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <div className={styles.wrapper__selects}>
        {new Array(count).fill('').map((_,index)=>
          <div
            className={[styles.item, select>=index + 1 ? styles.select :''].join(' ')}
            key={index}
            onClick={()=>clickHandle(index + 1)}
          />
        )}
      </div>
    </div>
  )
}