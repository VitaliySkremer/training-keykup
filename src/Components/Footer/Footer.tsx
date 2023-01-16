import styles from './Footer.module.scss'
import {Icon} from "../UI/Icons/Icon";
import {Icons} from "../UI/Icons/Icons";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={['container', styles.footer__container].join(' ')}>
				<p className={styles.footer__link}>
					<Icon icon={Icons.MAIL}/>
					<a target='_blank' className={styles.link} href="mailto:vitalik.semkin@mail.ru">vitalik.semkin@mail.ru</a>
				</p>
				<p className={styles.footer__link}>
					powered by VSkremer
				</p>
				<p className={styles.footer__link}>
					<Icon icon={Icons.GITHUB}/>
					<a target='_blank' className={styles.link} href="https://github.com/VitaliySkremer">VitaliySkremer</a>
				</p>
			</div>
		</footer>
	)
}