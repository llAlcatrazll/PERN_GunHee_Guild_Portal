import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const Hunter_Guides = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "dp7ejza0s" } });

  const hunter_guide_bg = cld
    .image("1135cb23acd7_pgxyg8")
    .format("auto")
    .quality("auto");

  return (
    <>
      <AdvancedImage cldImg={hunter_guide_bg} class=" p-100px z-0 relative" />
    </>
  );
};

export default Hunter_Guides;
