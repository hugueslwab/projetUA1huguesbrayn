import React from 'react'
import Styles from './card.module.css'

const CardComponent = (propos) => {
  return (
    <>
    <div className={Styles.container}>

        <div className={Styles.topCard}>{propos.topCard} </div>
          {propos.HasAvatar &&(<div className={Styles.avatar}>  </div>)}
        <div> 
            <div className={Styles.title}>
              {propos.Name}

            </div>
            <div>{propos.description}</div>
            
            
            </div>
        </div>
   
    </>
  )
}

export default CardComponent