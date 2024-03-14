import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import FeaturesMain from "../components/FeaturesMain";
import WorkingExplainMain from "../components/WorkingExplainMain";
import HeroMap from "../components/HeroMap";
import BannerInfo from "../components/BannerInfo";
import CarBanner from "../components/CarBanner";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import DeliveryDetails from "../components/DeliveryDetails";
import BikeAccessories from "../components/BikeAccessories";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <FeaturesMain />
      <WorkingExplainMain />
      <HeroMap />
      <BannerInfo />
      <CarBanner />
      <DeliveryDetails />
      <BikeAccessories />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
