"use client";
import Link from "next/link";
import React, { useState } from "react";
import Styles from "./links.module.css";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
const tab = [
  {
    title: "Accueil",
    path: "/",
  },

  {
    title: "Artistes & Concerts",
    path: "/partie1",
  },
  {
    title: "Biographie des Artistes",
    path: "/partie2",
  },
  {
    title: "contact",
    path: "/partie3",
  },
  {
    title: "test-home",
    path: "/partie4",
  },
];

const Links = () => {
  const pathname = usePathname();
  const [open, setopen] = useState(false);
  return (
    <div className={Styles.container}>
      <div className={Styles.links}>
        {tab.map((element, index) => (
          <Link
            className={element.path === pathname ? `${Styles.active}` : ""}
            key={index}
            href={element.path}
          >
            {element.title}
          </Link>
        ))}
      </div>
      <MenuIcon className={Styles.menuButton} onClick={() => setopen(!open)} />
      {open && (
        <div className={Styles.mobileLinks}>
          {tab.map((link, index) => (
            <Link
              className={pathname === link.path ? `${Styles.active}` : ""}
              href={link.path}
              key={index}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
