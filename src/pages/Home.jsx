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
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Despii - Smart Moped Hailing App</title>
        <meta
          name="description"
          content="Welcome to despii which makes your ride faster. Despii helps fast droping service. Despii Also helps reach a preferred location"
        />
        <meta
          name="keywords"
          content="Urban Transport, Moped Hailing, Shared Economy, Eco-friendly Rides"
        />
        <h1>Despii: Transport,Save Time</h1>

        <a href="/">Despii</a>
      </Helmet>

      <Helmet>
        <h2 className="hiddedn" rel="canonical">
          Share your ride and dash in no time!
        </h2>
      </Helmet>

      <Helmet>
        <meta property="og:title" content="Despii" />
        <meta
          property="og:description"
          content="Urban Transport, Moped Hailing, Shared Economy, Eco-friendly Rides"
        />
        <meta property="og:url" content="https://despii-ten.vercel.app/" />
        <meta property="og:image" content="src\utils\bg-main.png" />
        <meta property="og:type" content="website" />
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
