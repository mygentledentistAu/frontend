import Link from "next/link";
import Script from "next/script";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@/components/PrismicRichText";

export function Footer({ footer, settings }) {
  function renderAddress(i = 1, showButton = false) {
    const l = settings?.data?.locations?.[i - 1] || {};
    return (
      <address className={`box-${i + 1}`}>
        <PrismicRichText field={l.address} />
        <PrismicNextLink url={`tel:${l.phone}`}>{l.phone}</PrismicNextLink>
        {showButton ? (
          <div>
            <PrismicNextLink className="button button--primary" field={l.booking_link}>
              {l.booking_label}
            </PrismicNextLink>
          </div>
        ) : null}
      </address>
    );
  }

  function renderLinks(i = 1) {
    const links = footer?.data?.[`link_group_${i}`] || [];
    const title = footer?.data?.[`link_group_${i}_title`] || "";

    return (
      <article className={`links-${i}`}>
        <strong>{title}</strong>
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
    <>
      <footer>
        <div className="grid-wrap">
          <div className="bg">
            <div className="box-1">
              <Link href="/" className="logo">
                Home Page
              </Link>
              {email ? <PrismicNextLink url={`mailto:${email}`}>{email}</PrismicNextLink> : null}
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

      <dialog id="book-dialog" className="book-dialog">
        <button className="close-dialog">✕</button>
        <h2>Book Your Appointment</h2>
        <p>Book your appointment at your nearest dentistry. We serve both at</p>
        <div className="book-dialog__locations">
          {renderAddress(1, true)}
          {renderAddress(2, true)}
        </div>
      </dialog>

      <Script id="footer-script">
        {`
          const dialog =  document.querySelector("#book-dialog");

          const dialogOpenButtons =  document.querySelectorAll("[data-open-dialog='#book-dialog']");
          [...dialogOpenButtons].forEach(btn => { btn.addEventListener("click", (e) => { e.preventDefault(); dialog.showModal() })});

          const dialogCloseButton =  document.querySelector(".close-dialog");
          dialogCloseButton.addEventListener("click", (e) => { e.preventDefault(); dialog.close(); });
        `}
      </Script>
    </>
  );
}
