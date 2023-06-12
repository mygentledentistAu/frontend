import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText as BasePrismicRichText } from "@prismicio/react";

import { Heading } from "./Heading";

/** @type {import("@prismicio/react").JSXMapSerializer} */
const defaultComponents = {
  heading1: ({ children }) => <Heading as="h1">{children}</Heading>,
  heading2: ({ children }) => <Heading as="h2">{children}</Heading>,
  heading3: ({ children }) => <Heading as="h3">{children}</Heading>,
  paragraph: ({ children }) => <p>{children}</p>,
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
    <BasePrismicRichText
      components={{ ...defaultComponents, ...components }}
      {...props}
    />
  );
}
