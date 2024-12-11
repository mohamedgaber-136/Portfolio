import { NavBar } from "@/Components/NavBar/NavBar";
import { SwitchBtn } from "@/Components/SwitchBTN/SwitchBtn";
import React from "react";
import { HeroSection } from "./HeroSection";

const Home = () => {
  return (
    <div className="">
      <NavBar/>
      <SwitchBtn />
      <HeroSection />
    </div>
  );
};
export default Home;
