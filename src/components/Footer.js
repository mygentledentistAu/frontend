import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "./PrismicRichText";

export function Footer({ footer, settings }) {
  function renderAddress(i = 1) {
    const l = settings?.data?.locations?.[i - 1] || {};
    return (
      <address className={`box-${i + 1}`}>
        <PrismicRichText field={l.address} />
        <PrismicNextLink url={`tel:${l.phone}`}>{l.phone}</PrismicNextLink>
      </address>
    );
  }

  function renderLinks(i = 1) {
    const links = footer?.data?.[`link_group_${i}`] || [];
    return (
      <article className={`links-${i}`}>
        <ul>
          {links.map((l) => (
            <li key={l.link_text}>
              <PrismicNextLink field={l.link}>{l.link_text}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </article>
    );
  }

  const email = settings?.data?.email;

  return (
    <footer>
      <div className="grid-wrap">
        <div className="bg">
          <div className="box-1">
            <Link href="/" className="logo">
              Home Page
            </Link>
            {email ? (
              <PrismicNextLink url={`mailto:${email}`}>{email}</PrismicNextLink>
            ) : null}
          </div>
          {renderAddress(1)}
          {renderAddress(2)}

          {renderLinks(1)}
          {renderLinks(2)}
          {renderLinks(3)}
        </div>

        <div className="copyright">{footer?.data?.copyright}</div>
      </div>
    </footer>
  );
}
