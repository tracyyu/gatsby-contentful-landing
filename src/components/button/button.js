import React from 'react'
import * as styles from './button.module.css'

const Button = ({ type, text }) => {
	return (
		<button 
			className={`${styles.button} ${styles[type]}`}
			role='button'
		>
			<p className={styles.buttonText}>{text}</p>
		</button>
	)
    
}

export default Button;