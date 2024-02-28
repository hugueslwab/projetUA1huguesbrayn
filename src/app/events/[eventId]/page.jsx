import React from "react";
import Styles from "./eventDetails.module.css";
import data from "../../../data/data.json";
import TemplatePage from "@/components/templatePage/TemplatePage";
import Links from "@/components/navbar/links/Links";
import Link from "next/link";

const getEventDetails = (id) => {
  return data.find((element) => element.id === Number(id));
};

const EventDetails = ({ params }) => {
  const urlImage = "/events/";

  let evennementEnCours = getEventDetails(params.eventId);

  return (
    <div>
      <Link href="/events"> Retour a la liste des evenemnts</Link>
      {evennementEnCours ? (
        <TemplatePage
          {...evennementEnCours}
          src={urlImage + evennementEnCours.src}
        />
      ) : (
        <div className={Styles.titre}>
          L Evenement Numero {params.eventId} n existe pas
        </div>
      )}
    </div>
  );
};

export default EventDetails;
