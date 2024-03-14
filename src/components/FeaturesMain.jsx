import React from "react";
import BlockOne from "./featuresBlocks/BlockOne";
import BlockThree from "./featuresBlocks/BlockThree";
import BlockTwo from "./featuresBlocks/BlockTwo";
import { setLanguage, selectLanguage } from "../store/languageSlice";
import { useSelector, useDispatch } from "react-redux";

const FeaturesMain = () => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <div className="bg-neutral-900 lg:p-20 py-20 px-10 font-manrope">
      {selectedLanguage === "English" && (
        <div className="flex flex-col">
          <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-pink-700 text-transparent bg-clip-text text-xl font-bold lg:text-center text-left">
            App Features
          </span>
          <p className="text-white  text-5xl lg:text-6xl lg:text-center text-left mt-5 ">
            Enhancing Your Ride
            <span
              className="bg-gradient-to-r from-amber-600
          via-amber-700 to-pink-700 text-transparent bg-clip-text 
          font-bold lg:text-center text-left ml-2"
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
  );
};

export default FeaturesMain;
