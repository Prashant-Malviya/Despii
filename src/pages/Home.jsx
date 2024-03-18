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
        <title>Urban Transport - Smart Moped Hailing App</title>
        <meta
          name="description"
          content="Welcome to Urban Transport! The smart moped hailing app, eco-friendly and based on a shared economy, providing swift and hassle-free rides through bustling city streets."
        />
        <meta
          name="keywords"
          content="Urban Transport, Moped Hailing, Shared Economy, Eco-friendly Rides"
        />
        <h1>Despii: Transport,Save Time</h1>
      </Helmet>
      <h1 className="hidden p-0 m-0">Despii: Revisiting the urban transport industry</h1>
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
