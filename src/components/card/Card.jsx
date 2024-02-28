"use client";
import React from "react";
import Styles from "./card.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
const Card = ({
  id,
  src = "/logo1.png",
  alt = "logo1",
  titre = "Musicien Répresentation",
  description = "Vous trouverer les détails de l'artiste et son concert ici",
  textButton = "voir plus",
  place,
  urlDestination = "/events/",
  isProfile = false,
}) => {
  const router = useRouter();
  const handlerOnClick = () => {
    router.push(urlDestination + id);
  };
  return (
    <div className={Styles.cardContainer}>
      {isProfile ? (
        <img className={Styles.avtar} src={src} alt={alt} />
      ) : (
        <img className={Styles.cardImg} src={src} alt={alt} />
      )}

      <h1 className={Styles.cardTitle}>{titre} </h1>
      <div className={Styles.place}>
        <FmdGoodIcon /> {place}
      </div>
      <p className={Styles.cardDescription}>{description}</p>

      <button className={Styles.button} onClick={handlerOnClick}>
        {textButton}
      </button>
    </div>
  );
};

export default Card;
