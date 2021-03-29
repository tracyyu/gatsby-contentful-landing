import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Button from '../button/button'
import * as styles from './hero.module.css'

const Hero = () => {
	const { contentfulHeroBanner: { subtitleTop, title, description, ctaButtons } } = useStaticQuery(graphql`
  query {
    contentfulHeroBanner {
      title
      subtitleTop
      description {
        id
        internal {
          content
          description
          ignoreType
          mediaType
        }
      }
      ctaButtons {
        title
        text
        type
      }
    }
  }
  `)

	return (
		<div className={styles.hero}>
			<div className={styles.heroDetails}>
				<h5 className={styles.heroHeadline}>{subtitleTop}</h5>
				<h1 className={styles.heroTitle}>{title}</h1>
				<p className={styles.heroDescription}>{description.internal.content}</p>
			</div>
			<div className={styles.heroButtonContainer}>
			{
				ctaButtons.map((button) => {
					return (
						<Button 
							key={button.title}
							type={button.type}
							text={button.text}
						/>
					)
				})
			}
			</div>
		</div>
	)
    
}

export default Hero;