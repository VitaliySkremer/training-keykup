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
	{value:'Й',sub:'q', style: styles.key},
	{value:'Ц',sub:'w', style: styles.key},
	{value:'У',sub:'e', style: styles.key},
	{value:'К',sub:'r', style: styles.key},
	{value:'Е',sub:'t', style: styles.key},
	{value:'Н',sub:'y', style: styles.key},
	{value:'Г',sub:'u', style: styles.key},
	{value:'Ш',sub:'i', style: styles.key},
	{value:'Щ',sub:'o', style: styles.key},
	{value:'З',sub:'p', style: styles.key},
	{value:'Х',sub:'[', style: styles.key},
	{value:'Ъ',sub:']', style: styles.key},
	{value:'\\',sub:'/', style: styles.key},
]

const arrKeysLettersSecondLine:IKeys[]= [
	{value:'Caps Lock',style: [styles.key__system, styles.key].join(' ')},
	{value:'Ф',sub:'a', style: styles.key},
	{value:'Ы',sub:'s', style: styles.key},
	{value:'В',sub:'d', style: styles.key},
	{value:'А',sub:'f', style: styles.key},
	{value:'П',sub:'g', style: styles.key},
	{value:'Р',sub:'h', style: styles.key},
	{value:'О',sub:'j', style: styles.key},
	{value:'Л',sub:'k', style: styles.key},
	{value:'Д',sub:'l', style: styles.key},
	{value:'Ж',sub:';', style: styles.key},
	{value:'Э',sub:'\'', style: styles.key},
	{value:'Enter',style: [styles.key__system, styles.key].join(' ')},
]

const arrKeysLettersThirdLine:IKeys[]= [
	{value:'Shift',style: [styles.key__system, styles.key].join(' ')},
	{value:'Я',sub:'z', style: styles.key},
	{value:'Ч',sub:'x', style: styles.key},
	{value:'С',sub:'c', style: styles.key},
	{value:'М',sub:'v', style: styles.key},
	{value:'И',sub:'b', style: styles.key},
	{value:'Т',sub:'n', style: styles.key},
	{value:'Ь',sub:'m', style: styles.key},
	{value:'Б',sub:',', style: styles.key},
	{value:'Ю',sub:'>', style: styles.key},
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