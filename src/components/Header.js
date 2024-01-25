import Link from "next/link";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
//import "../styles/header.css";

import { useState, useEffect } from "react";

export const Header = ({ navigation }) => {
  const [open, setOpen] = useState(false);

  const openPanel = () => {
    setOpen(true);
  };

  const closePanel = () => {
    setOpen(false);
  };

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === "Escape") {
        closePanel();
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => document.removeEventListener("keydown", keyDownHandler);
  }, []);

  return (
    <header className={open ? "header--open" : ""} >
      <a href="#main-section" className="sr-only">
        Skip Navigation
      </a>
      <span className="page-mask" onClick={closePanel}></span>
      <div className="grid-wrap ">
        <nav className="bg-blur w-full p-4">
          <Link href="/" className="logo">
            {navigation.data.homepageLabel}
          </Link>

          <button
            className={open ? "hamburger active" : "hamburger"}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close Menu" : "Open Menu"}
          >
            <span />
          </button>

          <div className="menu">
            <ul>
              {navigation.data?.links.map((item) => (
                <li key={prismic.asText(item.label)}>
                  <PrismicNextLink field={item.link} className={item.style === "button" ? "button button--small" : ""}>
                    <PrismicText field={item.label} />
                  </PrismicNextLink>
                </li>
              ))}
              <li>
                <a href="#" className="button button--small" data-open-dialog="#book-dialog">
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
