import Link from "next/link";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

export const Header = ({ navigation, settings }) => {
  return (
    <header>
      <div className="grid-wrap">
        <nav>
          <Link href="/" className="logo">
            {navigation.data.homepageLabel}
          </Link>

          <ul className="flex flex-wrap justify-center gap-10">
            {navigation.data?.links.map((item) => (
              <li key={prismic.asText(item.label)}>
                <PrismicNextLink
                  field={item.link}
                  className={
                    item.style === "button" ? "button button--small" : ""
                  }
                >
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
