import React from "react";
import { setLanguage, selectLanguage } from "../store/languageSlice";
import { useSelector, useDispatch } from "react-redux";
import horizontalBanner from "../utils/bikesframe.png";
import foot from "../utils/foot.png";
import cycle from "../utils/cycle.png";
import scotter from "../utils/scotter.png";
import car from "../utils/car.png";
import truck from "../utils/truck.png";
const CarBanner = () => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <div className="bg-neutral-900 p-10 ">
      {selectedLanguage === "English" && (
        <div className="flex flex-col space-y-28 font-manrope justify-center items-center mt-10 relavive">
          <h2 className="text-white text-5xl ">
            Whatever you need ,{" "}
            <span className="bg-gradient-to-r text-5xl  from-amber-600 via-pink-900 to-purple-900 text-transparent bg-clip-text  font-bold lg:text-center text-left">
              Delivered{" "}
            </span>{" "}
          </h2>
          <div className="absolute bg-gradient-to-r from-orange-600/20 to-orange-800/20 rounded-full filter blur-3xl w-9/12 h-[50rem] lg:h-44  z-40"></div>
          <div className="py-20 hidden lg:block">
            <img
              src={horizontalBanner}
              alt="vehicle-banner"
              className="w-full h-auto z-50"
            />
          </div>
          <div className="py-2 lg:hidden flex flex-col space-y-6 ">
            <img
              src={foot}
              alt="vehicle-banner"
              className="w-full h-auto z-50"
            />
            <img
              src={cycle}
              alt="vehicle-banner"
              className="w-full h-auto z-50"
            />{" "}
            <img
              src={scotter}
              alt="vehicle-banner"
              className="w-full h-auto z-50"
            />{" "}
            <img
              src={car}
              alt="vehicle-banner"
              className="w-full h-auto z-50 mt-"
            />{" "}
            <img
              src={truck}
              alt="vehicle-banner"
              className="w-full h-auto z-50 mt-3"
            />
          </div>
        </div>
      )}

      {selectedLanguage === "French" && (
        <div className="flex flex-col space-y-28 font-manrope justify-center items-center mt-10 relavive">
          <h2 className="text-white text-5xl ">
            Tout ce dont tu as besoin peux être
            <span className="bg-gradient-to-r text-5xl  from-amber-600 via-pink-900 to-purple-900 text-transparent bg-clip-text  font-bold lg:text-center text-left">
              livré
            </span>
          </h2>
          <div className="absolute bg-gradient-to-r from-orange-600/20 to-orange-800/20 rounded-full filter blur-3xl w-9/12 h-44  z-40"></div>
          <div className="py-20 hidden lg:block">
            <img
              src={horizontalBanner}
              alt="vehicle-banner"
              className="w-full h-auto z-50"
            />
          </div>
          <div className="py-2 lg:hidden flex flex-col ">
            <img
              src={foot}
              alt="vehicle-banner"
              className="w-full h-auto z-50"
            />
            <img
              src={cycle}
              alt="vehicle-banner"
              className="w-full h-auto z-50"
            />{" "}
            <img
              src={scotter}
              alt="vehicle-banner"
              className="w-full h-auto z-50"
            />{" "}
            <img
              src={car}
              alt="vehicle-banner"
              className="w-full h-auto z-50"
            />{" "}
            <img
              src={truck}
              alt="vehicle-banner"
              className="w-full h-auto z-50"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarBanner;
