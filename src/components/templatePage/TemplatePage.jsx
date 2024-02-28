import React from 'react';
import Styles from './templatePage.module.css';
import Image from 'next/image';



const TemplatePage = (
{
  titre="Concerts en live de rap et RnB",
  description="Plongez dans une expérience musicale inoubliable avec nos concerts en direct de rap et RnB. Vibrez au rythme des beats, ressentez l'énergie des artistes sur scène et laissez-vous emporter par des performances exceptionnelles qui vous transporteront au cœur de la culture musicale contemporaine.",
  src="/logo2.png",
  alt="logo",
  textButton1="Savoir Plus",
  textButton2="Contact",
}
) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.textcontainer}>
        <h1 className={Styles.title}>{titre}</h1>
        <p className={Styles.description}> {description} </p>
        <div className={Styles.buttons}>
          <button className={Styles.likebutton}>{textButton1}</button>
          <button className={Styles.bookingbutton}>{textButton2}</button>
       </div>
      </div>
      <div className={Styles.imgcontainer}> <img src={src} alt={alt}/></div>
   
    </div>
  )
}

export default TemplatePage