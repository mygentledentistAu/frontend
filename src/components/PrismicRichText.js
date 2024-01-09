import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText as BasePrismicRichText } from "@prismicio/react";

import { Heading } from "./Heading";

/** @type {import("@prismicio/react").JSXMapSerializer} */
const defaultComponents = {
  heading1: ({ children }) => <h1>{children}</h1>,
  heading2: ({ children }) => <h2>{children}</h2>,
  heading3: ({ children }) => <h3>{children}</h3>,
  heading4: ({ children }) => <h4>{children}</h4>,
  heading5: ({ children }) => <h5>{children}</h5>,
  heading6: ({ children }) => <h6>{children}</h6>,
  paragraph: ({ children, key }) => <p>{children}</p>,
  oList: ({ children }) => <ol>{children}</ol>,
  oListItem: ({ children }) => <li>{children}</li>,
  list: ({ children }) => <ul>{children}</ul>,
  listItem: ({ children }) => <li>{children}</li>,
  preformatted: ({ children }) => (
    <pre>
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => <strong>{children}</strong>,
  hyperlink: ({ children, node }) => (
    <PrismicNextLink field={node.data}>{children}</PrismicNextLink>
  ),
};

export function PrismicRichText({ components, ...props }) {
  return (
    <div className="richtext">
      <BasePrismicRichText
        components={{ ...defaultComponents, ...components }}
        {...props}
      />
    </div>
  );
}
