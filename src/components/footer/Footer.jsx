import React from 'react'
import Styles from './footer.module.css'

const Footer = () => {
  return (
    <>
    <div className={Styles.container}>
        
        <h1 className={Styles.lesH}>
        WADUBASA ENTERTAIMENT, Inc.
        </h1>
        <h2 className={Styles.lesH}>
        Privacy Policy | Cookie Policy | Manage my cookies
        </h2>
        <h3 className={Styles.lesH}>
           &copy;2024 Wadusa.All rights reserved
        </h3>
        
    
      </div>
    
    </>
  )
}

export default Footer