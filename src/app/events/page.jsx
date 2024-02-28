import React from "react";
import Styles from "./events.module.css";
import data from "../../data/data.json";
import Link from "next/link";
import Card from "@/components/card/Card";

const Events = () => {
  const urlImage = "/events/";
  return (
    <div className={Styles.container}>
      {data.map((element) => (
        <Card {...element} src={urlImage + element.src} />
      ))}
    </div>
  );
};

export default Events;
