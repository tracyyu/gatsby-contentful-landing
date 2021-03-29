import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Button from '../button/button'
import * as styles from './imageTextBlock.module.css'

const ImageTextBlock = ({title, description, image, link}) => {

	return (
		<div className={styles.imageTextBlock}>
            <img src={`http:${image.file.url}`} alt={title} className={styles.productImage} />
			<div className={styles.imageTextBlockWrapper}>
				<h5 className={styles.imageTextBlockTitle}>{title}</h5>
				<p className={styles.imageTextBlockDescription}>{description.internal.content}</p>
                <a href="#" className={styles.imageTextBlockLink}>{link.label}</a>
			</div>
		</div>
	)
    
}

export default ImageTextBlock;