import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";

const Quote = ({ slice }) => {
  return (
    <section className="quote">
      <div className="grid-wrap">
        {prismic.isFilled.richText(slice.primary.quote) && (
          <>
            <div className="quote__content">
              &ldquo;
              <PrismicText field={slice.primary.quote} />
              &rdquo;
            </div>
            <div className="quote__by">
              {prismic.isFilled.keyText(slice.primary.source) && <> &mdash; {slice.primary.source}</>}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Quote;
