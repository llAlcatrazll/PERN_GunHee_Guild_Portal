import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const Guild_Catalog = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "dp7ejza0s" } });

  const landing_background_img = cld
    .image("03f470660b2a_wsehzi")
    .format("auto")
    .quality("auto");
  const invite_background = cld
    .image("5c625a01-263c-4f7e-bc6f-e4a45_aeknxk")
    .format("auto")
    .quality("auto");
  const bottom_divider = cld
    .image("4639f936a288_peohtd")
    .format("auto")
    .quality("auto");

  return (
    <>
      <AdvancedImage
        cldImg={landing_background_img}
        class=" p-100px z-0 relative"
      />
      <AdvancedImage cldImg={bottom_divider} class=" p-100px z-0 relative" />

      <AdvancedImage cldImg={invite_background} class=" p-100px z-0 relative" />
    </>
  );
};

export default Guild_Catalog;
