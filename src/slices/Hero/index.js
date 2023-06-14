import * as prismic from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

const Hero = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;

  return (
    <section className="hero">
      <div className="image">
        {prismic.isFilled.image(backgroundImage) && (
          <PrismicNextImage field={backgroundImage} alt="" />
        )}
      </div>

      <div className="content">
        <div className="grid-wrap">
          <div className="text">
            <h1>{slice.primary.heading}</h1>
            <PrismicRichText field={slice.primary.text} />
            {prismic.isFilled.link(slice.primary.buttonLink) && (
              <PrismicNextLink field={slice.primary.buttonLink}>
                {slice.primary.buttonText || "Learn More"}
              </PrismicNextLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
