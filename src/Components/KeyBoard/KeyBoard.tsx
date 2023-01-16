import styles from './KeyBoard.module.scss'
import {Key} from "./Key";
import {useEffect, useState} from "react";
export interface IKeys {
	value: string;
	sub?: string;
	style:string;
}

const arrKeysNumber:IKeys[] = [
	{value:'Ё', style: styles.key},
	{value:'1', sub:'!',style: styles.key},
	{value:'2', sub:'"',style: styles.key},
	{value:'3', sub:'№',style: styles.key},
	{value:'4', sub:';',style: styles.key},
	{value:'5', sub:'%',style: styles.key},
	{value:'6', sub:':',style: styles.key},
	{value:'7', sub:'?',style: styles.key},
	{value:'8', sub:'*',style: styles.key},
	{value:'9', sub:'(',style: styles.key},
	{value:'0', sub:')',style: styles.key},
	{value:'_', sub:'-',style: styles.key},
	{value:'=', sub:'+',style: styles.key},
	{value:'Backspace',style: [styles.key__system, styles.key].join(' ')},
]

const arrKeysLettersFirstLine:IKeys[]=[
	{value:'Tab',style: [styles.key__system, styles.key].join(' ')},
	{value:'Й', style: styles.key},
	{value:'Ц', style: styles.key},
	{value:'У', style: styles.key},
	{value:'К', style: styles.key},
	{value:'Е', style: styles.key},
	{value:'Н', style: styles.key},
	{value:'Г', style: styles.key},
	{value:'Ш', style: styles.key},
	{value:'Щ', style: styles.key},
	{value:'З', style: styles.key},
	{value:'Х', style: styles.key},
	{value:'Ъ', style: styles.key},
	{value:'\\',sub:'/', style: styles.key},
]

const arrKeysLettersSecondLine:IKeys[]= [
	{value:'Caps Lock',style: [styles.key__system, styles.key].join(' ')},
	{value:'Ф', style: styles.key},
	{value:'Ы', style: styles.key},
	{value:'В', style: styles.key},
	{value:'А', style: styles.key},
	{value:'П', style: styles.key},
	{value:'Р', style: styles.key},
	{value:'О', style: styles.key},
	{value:'Л', style: styles.key},
	{value:'Д', style: styles.key},
	{value:'Ж', style: styles.key},
	{value:'Э', style: styles.key},
	{value:'Enter',style: [styles.key__system, styles.key].join(' ')},
]

const arrKeysLettersThirdLine:IKeys[]= [
	{value:'Shift',style: [styles.key__system, styles.key].join(' ')},
	{value:'Я', style: styles.key},
	{value:'Ч', style: styles.key},
	{value:'С', style: styles.key},
	{value:'М', style: styles.key},
	{value:'И', style: styles.key},
	{value:'Т', style: styles.key},
	{value:'Ь', style: styles.key},
	{value:'Б', style: styles.key},
	{value:'Ю', style: styles.key},
	{value:'.',sub:',', style: styles.key},
	{value:'Shift',style: [styles.key__system, styles.key].join(' ')},
]

const arrEndKeys:IKeys[]=[
	{value:' ', style: [styles.key, styles.key__space].join(' ')},
	{value:'AltGraph', style: [styles.key, styles.key__graph].join(' ')},
]

export const KeyBoard = () => {
	const [textKey, setTextKey] = useState('');

	useEffect(()=>{
		const keyDown = (event:KeyboardEvent) =>{
			setTextKey(event.key)
		}
		document.addEventListener('keydown',keyDown)
		return ()=>{
			document.removeEventListener('keydown', keyDown)
		}
	},[])

	return (
		<div className={styles.keys}>
			<div className={styles.line}>
				{arrKeysNumber.map((item, index)=>
					<Key keyKap={item} key={index} textKey={textKey}/>
				)}
			</div>
			<div className={styles.line}>
				{arrKeysLettersFirstLine.map((item, index)=>
					<Key keyKap={item} key={index} textKey={textKey}/>
				)}
			</div>
			<div className={styles.line}>
				{arrKeysLettersSecondLine.map((item, index)=>
					<Key keyKap={item} key={index} textKey={textKey}/>
				)}
			</div>
			<div className={styles.line}>
				{arrKeysLettersThirdLine.map((item, index)=>
					<Key keyKap={item} key={index} textKey={textKey}/>
				)}
			</div>
			<div className={styles.line}>
				{arrEndKeys.map((item, index)=>
					<Key keyKap={item} key={index} textKey={textKey}/>
				)}
			</div>
		</div>
	)
}