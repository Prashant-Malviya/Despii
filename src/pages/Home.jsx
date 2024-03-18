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
import {Helmet} from "react-helmet"

const Home = () => {
  return (
    <div>
    <Helmet>
      <title>Urban Transport</title>
      <meta name="description" content="The smart moped hailing app eco-friendly based on shared economy, providing swift and hassle-free rides through bustling city streets."/>
      <h1>Despii: Welcome To Home Page</h1>
      <h2>Transport Make Easy</h2>
      <meta name="keywords" content="Transport,Easy Ride,Transport Service" />
    </Helmet>
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
