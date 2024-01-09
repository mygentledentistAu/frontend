import * as prismic from "@prismicio/client";
import { PrismicRichText } from "@/components/PrismicRichText";

const Text = ({ slice }) => {
  return (
    <section className="slice-text">
      <div className="grid-wrap">
        {prismic.isFilled.richText(slice.primary.text) && (
          <PrismicRichText field={slice.primary.text} />
        )}
      </div>
    </section>
  );
};

export default Text;
