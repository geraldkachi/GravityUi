import React from "react";
import HeroGravity from "./HeroGravity";
import NavGravity from "./NavGravity";
import SolveGravity from "./SolveGravity";
import ServicesGravity from "./ServicesGravity";
import SuperGravity from "./SuperGravity";
import DiscoverGravity from "./DiscoverGravity";
import TestimonialsGravity from "./TestimonialsGravity";
import ClientsGravity from "./ClientsGravity";

const Gravity = () => {
  return (
    <>
      <div>
        <div style={{ backgroundColor: "#F4F4F4" }}>
          <NavGravity />
          <HeroGravity />
        </div>
        <div style={{ backgroundColor: "#E5E5E5" }}>
          <SolveGravity />
          <ServicesGravity />
          <SuperGravity />
          <DiscoverGravity />
          <TestimonialsGravity />
          <ClientsGravity />                       
        </div>
      </div>
    </>
  );
};

export default Gravity;
