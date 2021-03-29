import { Icon } from '@material-ui/core';
import React from 'react'
import arrowImg from '../../../static/right-chevron.svg';
import * as styles from './button.module.css'

const Button = ({ type, text }) => {
	return (
		<button 
			className={`${styles.button} ${styles[type]}`}
			role='button'
		>
			<p className={styles.buttonText}>{text}</p>
			<img src={arrowImg} className={styles.buttonIcon} />
		</button>
	)
    
}

export default Button;