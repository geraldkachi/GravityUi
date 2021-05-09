import React from "react";
import HeroGravity from "./HeroGravity";
import NavGravity from "./NavGravity";
import SolveGravity from "./SolveGravity";
import ServicesGravity from "./ServicesGravity";
import SuperGravity from "./SuperGravity";
import DiscoverGravity from "./DiscoverGravity";

const Gravity = () => {
  return (
    <>
      <div className="vh-100">
        <NavGravity />
        <HeroGravity />
        <SolveGravity />
        <ServicesGravity />
        <SuperGravity />
        <DiscoverGravity />
      </div>
    </>
  );
};

export default Gravity;
