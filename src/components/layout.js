import * as React from "react"
import Container from '@material-ui/core/Container';
import { Link } from "gatsby"

const Layout = ({children, imageBackground: {file} }) => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundImage: `url(http:${file.url})`,
      backgroundSize: 'cover'
    }}>
      <div className="overlay-1"></div>
      <div className="overlay-2"></div>
      <div className="global-wrapper">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
