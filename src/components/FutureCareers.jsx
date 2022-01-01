import React from "react";
import InfinityCarousel from "./InfinityCarousel";
import { importAll } from "./utils";

const images = importAll(
  require.context("../img/company/", false, /\.(png|jpe?g|svg)$/)
);

const image = src => <img src={src} className="company-img" />;

export default function FutureCareers() {
  const components = images.map(x => image(x));

  return <InfinityCarousel>{[...components, ...components]}</InfinityCarousel>;
}
