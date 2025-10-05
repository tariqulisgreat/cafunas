import React from "react";
import TopBar from "../components/TopBar";
import MainMenu from "../components/MainMenu";
import HeroSlider from "../components/HeroSlider";
import ImageSection from "../components/ImageSection";
import FullCTA from "../components/FullCTA";
import ServicesSection from "../components/ServicesSection";
import PlatformCTA from "../components/PlatformCTA";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <TopBar />
      <MainMenu />
      <HeroSlider />
      <ImageSection />
      <FullCTA />
      <ServicesSection />
      <PlatformCTA />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
