import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Button from '../button/button'
import * as styles from './navigation.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Navigation = (props) => {

  const {contentfulHeader : { companyLogo, headerNavBar }} = useStaticQuery(graphql`
  query {
    contentfulHeader {
      companyLogo {
        id
        file {
          url
          fileName
        }
      }
      headerNavBar {
        navbarItems {
          id
          name
          label
        }
        ctaButtons {
          title
          text
          type
        }
      }
    }
  }
  `)

  console.log(companyLogo.file.url)

  return (
    <div className={styles.navigationContainer}>
      <nav role="navigation" className={styles.navigationWrapper}>
        <img className={styles.privacy} alt="logo" src={`https:${companyLogo.file.url}`} />
        <ul className={styles.navigation}>
          {
            headerNavBar.navbarItems.map((item) => {
              return (
                <li className={styles.navigationItem} key={item.id}>
                  <Link to="/">{item.label}</Link>
                </li>
              )
            })
          }
          {
            headerNavBar.ctaButtons.map((button) => {
              return (
                <li className={styles.navigationItem} key={button.name}>
                  <Button 
                    type={button.type}
                    text={button.text}
                  />
                </li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )
}

export default Navigation