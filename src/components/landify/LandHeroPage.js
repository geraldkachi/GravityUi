import React from "react";
import LandNav from "./LandNav";
import LandHero from "./LandHero";
import LandTailor from "./LandTailor";
import LandStory from "./LandStory";

const LandHeroPage = () => {
  return (
    <>
      <div className="">
          <LandNav />
          <LandHero />
      </div>
      <LandTailor className="min-vh-100 mx-auto" />
      <LandStory className="min-vh-100 mx-auto" />

    </>
  );
};

export default LandHeroPage;
