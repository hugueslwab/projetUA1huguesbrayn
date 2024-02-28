"use client";
import TemplatePage from "@/components/templatePage/TemplatePage";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <TemplatePage
        titre="Wadubasa events "
        description="Bienvenue sur notre plateforme dédiée à la musique live ! Explorez un univers captivant de sonorités, rythmes entraînants et performances époustouflantes. Réservez facilement vos places pour les concerts les plus prisés, accédez à des infos détaillées sur les artistes, et plongez dans l'excitation de la scène musicale contemporaine.

   Naviguez parmi une sélection d'événements soigneusement choisis, de concerts intimes à des festivals grandioses. Notre mission : vous offrir plus que des billets, une expérience inoubliable en connectant les passionnés de musique à leurs artistes préférés.
   
   Soyez au cœur de l'action, ne manquez aucune note. Rejoignez notre communauté de mélomanes, où chaque clic rapproche d'une soirée musicale mémorable. Bienvenue sur le chemin vers l'émotion musicale - votre billet pour l'extraordinaire commence ici."
        src="/logo2.png"
        alt="Travis scott"
        textButton1="À propos "
        textButton2="Contact"
      />
    </main>
  );
}
