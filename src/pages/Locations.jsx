import React from "react";
import Hero from "../components/Locations/Hero";
import Subtitle from "../components/Locations/Subtitle";
import MapSection from "../components/Locations/MapSection";
import JobRolesSection from "../components/HomePage/JobRolesSection";

const Locations = () => {
  return (
    <>
      <Hero title="Our locations" />
      <Subtitle />
      <MapSection />
      <JobRolesSection />
    </>
  );
};

export default Locations;
