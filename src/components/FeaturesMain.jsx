import React from "react";
import BlockOne from "./featuresBlocks/BlockOne";
import BlockThree from "./featuresBlocks/BlockThree";
import BlockTwo from "./featuresBlocks/BlockTwo";
import { setLanguage, selectLanguage } from "../store/languageSlice";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

const FeaturesMain = () => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <>
    <Helmet>
      <title>Urban Transport</title>
      <meta name="description" content="The smart moped hailing app eco-friendly based on shared economy, providing swift and hassle-free rides through bustling city streets."/>
      
      <meta name="keywords" content="Transport,Easy Ride,Transport Service" />
    </Helmet>
<div className="bg-neutral-900 lg:p-20 py-20 px-10 font-manrope">
      {selectedLanguage === "English" && (
        <div className="flex flex-col">
          <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-pink-700 text-transparent bg-clip-text text-xl font-bold lg:text-center text-left">
            App Features
          </span>
          <p className="text-white  text-4xl lg:text-6xl lg:text-center text-left mt-5 ">
            Enhancing Your Ride
            <span
              className="bg-gradient-to-r from-amber-600
          via-amber-700 to-pink-700 text-transparent bg-clip-text 
          font-bold lg:text-center text-left"
            >
              Experience
            </span>
          </p>
        </div>
      )}
      {selectedLanguage === "French" && (
        <div className="flex flex-col">
          <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-pink-700 text-transparent bg-clip-text text-xl font-bold lg:text-center text-left">
            Fonctionnalités de l'application
          </span>
          <p className="text-white  text-5xl lg:text-6xl lg:text-center text-left mt-5 ">
            Gère tes déplacements
          </p>
          <span
            className="bg-gradient-to-r from-amber-600
          via-amber-700 to-pink-700 text-transparent bg-clip-text 
          font-bold lg:text-center text-left   text-5xl lg:text-6xl"
          >
            autrement
          </span>
        </div>
      )}

      <BlockOne />
      <BlockTwo />
      <BlockThree />
    </div>
    </>
    
  );
};

export default FeaturesMain;
