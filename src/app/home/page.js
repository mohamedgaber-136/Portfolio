import { NavBar } from "@/Components/NavBar/NavBar";
import { SwitchBtn } from "@/Components/SwitchBTN/SwitchBtn";
import React from "react";
import { HeroSection } from "./HeroSection";
import { Socialmedia } from "./Socialmedia";

const Home = () => {
  return (
    <div className="">
      {/* <NavBar/> */}
      <SwitchBtn />
      <HeroSection />
      <Socialmedia/>
    </div>
  );
};
export default Home;
