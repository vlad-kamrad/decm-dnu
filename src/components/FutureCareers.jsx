import React from "react";
import InfinityCarousel from "./InfinityCarousel";
/* import { StaticImage } from "gatsby-plugin-image"; */
import { importAll } from "./utils";

const images = importAll(
  require.context("../img/company/", false, /\.(png|jpe?g|svg)$/)
);

const image = (src, key) => (
  <img src={src} key={key} loading="lazy" className="company-img" />
);

export default function FutureCareers() {
  const components = images.map(image);

  return <InfinityCarousel>{[...components, ...components]}</InfinityCarousel>;
}
