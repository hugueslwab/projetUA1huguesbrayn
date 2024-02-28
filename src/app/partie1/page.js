import React from "react";
import Card from "@/components/card/Card";
import TemplatePage from "@/components/templatePage/TemplatePage";

const tabCard = [
  {
    src: "/imgage5.jpg",
    alt: "portrait",
    titre: "Drake",
    description:
      " Date et heure : 25 juin 2024 , 8:00 PM;  Lieu du concert: Stade de la Ville Lumière, 1234 Rue de la Musique; Tarif de billet: 20$",
    textButton: "Read more",
    isProfile: false,
  },
  {
    src: "/imgage4.jpg",
    alt: "Portrait 2",
    titre: "Adele",
    description:
      "Date et heure : 08 Février 2024, 7:00 PM;  Lieu du concert: Centre des Arts de Sydney; Tarif de billet: 80$",
    textButton: "Read more",
    isProfile: false,
  },
  {
    src: "/imgage3.jpg",
    alt: "portrait",
    titre: "Billie Eilish",
    description:
      "Date et heure : 14t Juillet 2024, 3:00 PM;  Lieu du concert: Auditorium Royal de Londres; Tarif de billet: 40$",
    textButton: "Read more",
    isProfile: false,
  },
  {
    src: "/imgage2.jpg",
    alt: "portrait",
    titre: "21 Savage",
    description:
      "Date et heure : 05 Mars 2024, 9:00 PM;  Lieu du concert: Arène Musicale de New York; Tarif de billet: 45$",
    textButton: "Read more",
    isProfile: false,
  },
  {
    src: "/imgage1.jpg",
    alt: "portrait",
    titre: "Travis Scott",
    description:
      "Date et heure : 21 Avril 2024, 7:00 PM;  Lieu du concert: Salle de Concert Harmonie de Paris; Tarif de billet: 78$",
    textButton: "Read more",
    isProfile: false,
  },
  {
    src: "/imgage6.jpg",
    alt: "portrait",
    titre: "NBA YoungBoy",
    description:
      "Date et heure : 18 Novembre 2024, 9:00 PM;  Lieu du concert: Amphithéâtre Écossais d'Édimbourg ; Tarif de billet: 50$",
    textButton: "Read more",
    isProfile: false,
  },
  {
    src: "/imgage7.jpg",
    alt: "portrait",
    titre: "XXXTentacion",
    description:
      "Date et heure : 23 Août 2024, 9:00 PM;  Lieu du concert: Théâtre de la Musique de Los Angeles; Tarif de billet: 90$",
    textButton: "Read more",
    isProfile: false,
  },
];

const Page1 = () => {
  return (
    <>
      <TemplatePage />
      <main style={{ display: "flex" }}>
        {tabCard.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </main>
    </>
  );
};

export default Page1;
