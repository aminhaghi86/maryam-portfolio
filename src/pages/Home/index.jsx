import React from "react";
import Landing from "../../components/Landing";
import TabHeader from "../../components/TabHeader";
import Skills from "../../components/Skills";
import Hero from "../../components/Hero";
const Home = () => {
  return (
    <>
      <Landing />
      <Hero/>
      <Skills />
      <TabHeader />
    </>
  );
};

export default Home;
