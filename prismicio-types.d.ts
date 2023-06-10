// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Article documents */
interface ArticleDocumentData {
  /**
   * Title field in *Article*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the article
   * - **API ID Path**: article.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Publish Date field in *Article*
   *
   * - **Field Type**: Date
   * - **Placeholder**: Date the article was published
   * - **API ID Path**: article.publishDate
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  publishDate: prismic.DateField;
  /**
   * Featured Image field in *Article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.featuredImage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  featuredImage: prismic.ImageField<never>;
  /**
   * Slice Zone field in *Article*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: article.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<ArticleDocumentDataSlicesSlice>;
}
/**
 * Slice for *Article → Slice Zone*
 *
 */
type ArticleDocumentDataSlicesSlice =
  | ImageSlice
  | QuoteSlice
  | TextSlice
  | ContactFormSlice;
/**
 * Article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArticleDocumentData>,
    "article",
    Lang
  >;
/** Content for Navigation documents */
interface NavigationDocumentData {
  /**
   * Home Page Label field in *Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.homepageLabel
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  homepageLabel: prismic.KeyTextField;
  /**
   * Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}
/**
 * Item in Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Label field in *Navigation → Links*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Optional - Label for the link
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  label: prismic.TitleField;
  /**
   * Link field in *Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for navigation item
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
  /**
   * style field in *Navigation → Links*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: default
   * - **API ID Path**: navigation.links[].style
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  style: prismic.SelectField<"default" | "button" | "home", "filled">;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title for the page
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice =
  | ImageSlice
  | QuoteSlice
  | TextSlice
  | ContactFormSlice
  | BookAppointmentSlice
  | TreatmentListSlice
  | HeroHomeSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
  /**
   * Name field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Name of your blog (e.g. your name)
   * - **API ID Path**: settings.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  name: prismic.TitleField;
  /**
   * Description field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Short description of your blog
   * - **API ID Path**: settings.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Profile Picture field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.profilePicture
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  profilePicture: prismic.ImageField<never>;
  /**
   * Newsletter Description field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text above the sign up form
   * - **API ID Path**: settings.newsletterDescription
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  newsletterDescription: prismic.RichTextField;
  /**
   * Newsletter Disclaimer field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Small text below sign up form
   * - **API ID Path**: settings.newsletterDisclaimer
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  newsletterDisclaimer: prismic.RichTextField;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;
/** Content for Treatment documents */
interface TreatmentDocumentData {
  /**
   * Title field in *Treatment*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: treatment.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Category field in *Treatment*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Emergency Dental
   * - **API ID Path**: treatment.category
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  category: prismic.SelectField<
    "Emergency Dental" | "General treatments" | "Cosmetic",
    "filled"
  >;
  /**
   * featured field in *Treatment*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: treatment.featured
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  featured: prismic.BooleanField;
  /**
   * Slice Zone field in *Treatment*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: treatment.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<TreatmentDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Treatment*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: treatment.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Image field in *Treatment*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: treatment.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Treatment*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: treatment.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Treatment → Slice Zone*
 *
 */
type TreatmentDocumentDataSlicesSlice =
  | TextSlice
  | TextWithImageSlice
  | ImageSlice
  | HeroSlice;
/**
 * Treatment document from Prismic
 *
 * - **API ID**: `treatment`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TreatmentDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<TreatmentDocumentData>,
    "treatment",
    Lang
  >;
export type AllDocumentTypes =
  | ArticleDocument
  | NavigationDocument
  | PageDocument
  | SettingsDocument
  | TreatmentDocument;
/**
 * Primary content in BookAppointment → Primary
 *
 */
interface BookAppointmentSliceDefaultPrimary {
  /**
   * Title field in *BookAppointment → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: book_appointment.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Button Link field in *BookAppointment → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: book_appointment.primary.button_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_link: prismic.LinkField;
  /**
   * Button Label field in *BookAppointment → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: book_appointment.primary.button_label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  button_label: prismic.KeyTextField;
}
/**
 * Item in BookAppointment → Items
 *
 */
export interface BookAppointmentSliceDefaultItem {
  /**
   * Days field in *BookAppointment → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: book_appointment.items[].days
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  days: prismic.KeyTextField;
  /**
   * Hours field in *BookAppointment → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: book_appointment.items[].hours
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  hours: prismic.KeyTextField;
}
/**
 * Default variation for BookAppointment Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BookAppointmentSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BookAppointmentSliceDefaultPrimary>,
  Simplify<BookAppointmentSliceDefaultItem>
>;
/**
 * Slice variation for *BookAppointment*
 *
 */
type BookAppointmentSliceVariation = BookAppointmentSliceDefault;
/**
 * BookAppointment Shared Slice
 *
 * - **API ID**: `book_appointment`
 * - **Description**: `BookAppointment`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BookAppointmentSlice = prismic.SharedSlice<
  "book_appointment",
  BookAppointmentSliceVariation
>;
/**
 * Default variation for ContactForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ContactForm`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactFormSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;
/**
 * Slice variation for *ContactForm*
 *
 */
type ContactFormSliceVariation = ContactFormSliceDefault;
/**
 * ContactForm Shared Slice
 *
 * - **API ID**: `contact_form`
 * - **Description**: `ContactForm`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactFormSlice = prismic.SharedSlice<
  "contact_form",
  ContactFormSliceVariation
>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
  /**
   * Text field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Button Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  buttonLink: prismic.LinkField;
  /**
   * Button Text field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.buttonText
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  buttonText: prismic.KeyTextField;
  /**
   * Background Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.backgroundImage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  backgroundImage: prismic.ImageField<never>;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in HeroHome → Primary
 *
 */
interface HeroHomeSliceDefaultPrimary {
  /**
   * Title field in *HeroHome → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Short Text field in *HeroHome → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.primary.short_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  short_text: prismic.KeyTextField;
  /**
   * Button Link field in *HeroHome → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.primary.button_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_link: prismic.LinkField;
  /**
   * Button Label field in *HeroHome → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.primary.button_label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  button_label: prismic.KeyTextField;
  /**
   * Icon Link field in *HeroHome → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.primary.icon_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  icon_link: prismic.LinkField;
  /**
   * Icon Image field in *HeroHome → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.primary.icon_image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  icon_image: prismic.ImageField<never>;
  /**
   * Icon Text field in *HeroHome → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.primary.icon_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  icon_text: prismic.KeyTextField;
  /**
   * Image field in *HeroHome → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for HeroHome Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroHomeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroHomeSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *HeroHome*
 *
 */
type HeroHomeSliceVariation = HeroHomeSliceDefault;
/**
 * HeroHome Shared Slice
 *
 * - **API ID**: `hero_home`
 * - **Description**: `HeroHome`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroHomeSlice = prismic.SharedSlice<
  "hero_home",
  HeroHomeSliceVariation
>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Caption field in *Image → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Optional - Caption under the image
   * - **API ID Path**: image.primary.caption
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  caption: prismic.RichTextField;
}
/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceWidePrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Caption field in *Image → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Optional - Caption under the image
   * - **API ID Path**: image.primary.caption
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  caption: prismic.RichTextField;
}
/**
 * Wide variation for Image Slice
 *
 * - **API ID**: `wide`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceWide = prismic.SharedSliceVariation<
  "wide",
  Simplify<ImageSliceWidePrimary>,
  never
>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceDefault | ImageSliceWide;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;
/**
 * Primary content in ImageCards → Primary
 *
 */
interface ImageCardsSliceDefaultPrimary {
  /**
   * Heading field in *ImageCards → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.primary.heading
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  heading: prismic.RichTextField;
}
/**
 * Item in ImageCards → Items
 *
 */
export interface ImageCardsSliceDefaultItem {
  /**
   * Image field in *ImageCards → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Text field in *ImageCards → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.items[].text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Button Link field in *ImageCards → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.items[].buttonLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  buttonLink: prismic.LinkField;
  /**
   * Button Text field in *ImageCards → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_cards.items[].buttonText
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  buttonText: prismic.KeyTextField;
}
/**
 * Default variation for ImageCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ImageCards`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageCardsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageCardsSliceDefaultPrimary>,
  Simplify<ImageCardsSliceDefaultItem>
>;
/**
 * Slice variation for *ImageCards*
 *
 */
type ImageCardsSliceVariation = ImageCardsSliceDefault;
/**
 * ImageCards Shared Slice
 *
 * - **API ID**: `image_cards`
 * - **Description**: `ImageCards`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageCardsSlice = prismic.SharedSlice<
  "image_cards",
  ImageCardsSliceVariation
>;
/**
 * Primary content in Quote → Primary
 *
 */
interface QuoteSliceDefaultPrimary {
  /**
   * Quote field in *Quote → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Quote without quotation marks
   * - **API ID Path**: quote.primary.quote
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  quote: prismic.TitleField;
  /**
   * Source field in *Quote → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Source of the quote
   * - **API ID Path**: quote.primary.source
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  source: prismic.KeyTextField;
}
/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<QuoteSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Quote*
 *
 */
type QuoteSliceVariation = QuoteSliceDefault;
/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSlice = prismic.SharedSlice<"quote", QuoteSliceVariation>;
/**
 * Primary content in Text → Primary
 *
 */
interface TextSliceDefaultPrimary {
  /**
   * Text field in *Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text with rich formatting
   * - **API ID Path**: text.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
}
/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Text*
 *
 */
type TextSliceVariation = TextSliceDefault;
/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;
/**
 * Primary content in TextWithImage → Primary
 *
 */
interface TextWithImageSliceDefaultPrimary {
  /**
   * Text field in *TextWithImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Image field in *TextWithImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for TextWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextWithImageSliceDefaultPrimary>,
  never
>;
/**
 * Primary content in TextWithImage → Primary
 *
 */
interface TextWithImageSliceWithButtonPrimary {
  /**
   * Text field in *TextWithImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Button Link field in *TextWithImage → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  buttonLink: prismic.LinkField;
  /**
   * Button Text field in *TextWithImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.buttonText
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  buttonText: prismic.KeyTextField;
  /**
   * Image field in *TextWithImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text_with_image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * With Button variation for TextWithImage Slice
 *
 * - **API ID**: `withButton`
 * - **Description**: `TextWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImageSliceWithButton = prismic.SharedSliceVariation<
  "withButton",
  Simplify<TextWithImageSliceWithButtonPrimary>,
  never
>;
/**
 * Slice variation for *TextWithImage*
 *
 */
type TextWithImageSliceVariation =
  | TextWithImageSliceDefault
  | TextWithImageSliceWithButton;
/**
 * TextWithImage Shared Slice
 *
 * - **API ID**: `text_with_image`
 * - **Description**: `TextWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImageSlice = prismic.SharedSlice<
  "text_with_image",
  TextWithImageSliceVariation
>;
/**
 * Primary content in TreatmentList → Primary
 *
 */
interface TreatmentListSliceDefaultPrimary {
  /**
   * Title field in *TreatmentList → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: treatment_list.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Footer Text field in *TreatmentList → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: treatment_list.primary.footer_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  footer_text: prismic.KeyTextField;
  /**
   * Footer Link field in *TreatmentList → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: treatment_list.primary.footer_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  footer_link: prismic.LinkField;
  /**
   * Footer Link Text field in *TreatmentList → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: treatment_list.primary.footer_link_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  footer_link_text: prismic.KeyTextField;
}
/**
 * Default variation for TreatmentList Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TreatmentListSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TreatmentListSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *TreatmentList*
 *
 */
type TreatmentListSliceVariation = TreatmentListSliceDefault;
/**
 * TreatmentList Shared Slice
 *
 * - **API ID**: `treatment_list`
 * - **Description**: `TreatmentList`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TreatmentListSlice = prismic.SharedSlice<
  "treatment_list",
  TreatmentListSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      ArticleDocumentData,
      ArticleDocumentDataSlicesSlice,
      ArticleDocument,
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      NavigationDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PageDocument,
      SettingsDocumentData,
      SettingsDocument,
      TreatmentDocumentData,
      TreatmentDocumentDataSlicesSlice,
      TreatmentDocument,
      AllDocumentTypes,
      BookAppointmentSliceDefaultPrimary,
      BookAppointmentSliceDefaultItem,
      BookAppointmentSliceDefault,
      BookAppointmentSliceVariation,
      BookAppointmentSlice,
      ContactFormSliceDefault,
      ContactFormSliceVariation,
      ContactFormSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefault,
      HeroSliceVariation,
      HeroSlice,
      HeroHomeSliceDefaultPrimary,
      HeroHomeSliceDefault,
      HeroHomeSliceVariation,
      HeroHomeSlice,
      ImageSliceDefaultPrimary,
      ImageSliceDefault,
      ImageSliceWidePrimary,
      ImageSliceWide,
      ImageSliceVariation,
      ImageSlice,
      ImageCardsSliceDefaultPrimary,
      ImageCardsSliceDefaultItem,
      ImageCardsSliceDefault,
      ImageCardsSliceVariation,
      ImageCardsSlice,
      QuoteSliceDefaultPrimary,
      QuoteSliceDefault,
      QuoteSliceVariation,
      QuoteSlice,
      TextSliceDefaultPrimary,
      TextSliceDefault,
      TextSliceVariation,
      TextSlice,
      TextWithImageSliceDefaultPrimary,
      TextWithImageSliceDefault,
      TextWithImageSliceWithButtonPrimary,
      TextWithImageSliceWithButton,
      TextWithImageSliceVariation,
      TextWithImageSlice,
      TreatmentListSliceDefaultPrimary,
      TreatmentListSliceDefault,
      TreatmentListSliceVariation,
      TreatmentListSlice,
    };
  }
}
