import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Button from '../button/button'
import * as styles from './imageTextBlock.module.css'
import arrowImg from '../../../static/learn-more.svg';

const ImageTextBlock = ({title, description, image, link}) => {

	return (
		<div className={styles.imageTextBlock}>
            <img src={`http:${image.file.url}`} alt={title} className={styles.productImage} />
			<div className={styles.imageTextBlockWrapper}>
				<h5 className={styles.imageTextBlockTitle}>{title}</h5>
				<p className={styles.imageTextBlockDescription}>{description.internal.content}</p>
                <a href="#" className={styles.imageTextBlockLink}>{link.label}<img src={arrowImg} className={styles.buttonIcon} /></a>
			</div>
		</div>
	)
    
}

export default ImageTextBlock;