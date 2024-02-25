import React from "react";
import Landing from "../../components/Landing";
import TabHeader from "../../components/TabHeader";
import Skills from "../../components/Skills";
import Hero from "../../components/Hero";
import ImageSlider from "../../components/ImageSlider";
const Home = () => {
  return (
    <>
      <Landing />
      <Hero />
      <ImageSlider />
      <Skills />
      <TabHeader />
    </>
  );
};

export default Home;
