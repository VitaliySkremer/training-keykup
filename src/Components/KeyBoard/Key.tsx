import {IKeys} from "./KeyBoard";
import styles from './KeyBoard.module.scss'

interface IKeyProps {
	keyKap: IKeys,
	textKey: string
}

export const Key = ({keyKap,textKey}:IKeyProps) => {
	return (
		<div key={keyKap.value} className={[keyKap.style, textKey.toLowerCase() === keyKap.value.toLowerCase() || textKey === keyKap.sub ?styles.key__active:''].join(' ')}>
			{keyKap.value}
			{keyKap.sub && (
				<sub className={styles.sub}>{keyKap.sub}</sub>
			)}
		</div>
	)
}