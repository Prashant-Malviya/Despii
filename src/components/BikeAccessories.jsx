import React from "react";
import { selectLanguage } from "../store/languageSlice";
import { useSelector } from "react-redux";
import helmetImg from "./AccessoriesImg/Helmet.png";
import leftHandGlove from "./AccessoriesImg/left hand glove.png";
import rightHandGlove from "./AccessoriesImg/Right Hand Glove.png";
import rearPassengerBackseat from "./AccessoriesImg/Rear Passenger Backseat.png";
import topCase from "./AccessoriesImg/Top Case.png";
import phoneHolder from "./AccessoriesImg/PhoneHolder.png";
import { Helmet } from "react-helmet";

function BikeAccessories() {
  const selectedLanguage = useSelector(selectLanguage);

  return (
    <>
     <Helmet>
      <title>Urban Transport</title>
      <meta name="description" content="The smart moped hailing app eco-friendly based on shared economy, providing swift and hassle-free rides through bustling city streets."/>
      
      <meta name="keywords" content="Transport,Easy Ride,Transport Service" />
    </Helmet>
      <div className="bg-neutral-900">
      {selectedLanguage === "English" && (
        <div className="flex flex-col space-y-2 font-manrope justify-center items-center text-center p-10 relative">
          <h2 className="text-white text-5xl mb-5 mt-5 p-10">
            Bike Accessories{" "}
            <span className="bg-gradient-to-r text-5xl  from-amber-600 via-pink-900 to-purple-900 text-transparent bg-clip-text  font-bold lg:text-center text-left">
              Marketplace{" "}
            </span>{" "}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 lg:gap-10 content-center text-center">
            <div className="flex flex-col justify-center items-center">
              <img
                src={helmetImg}
                alt="helmet"
                className="abosolute h-56 w-56 p-4"
              />
              <p className=" text-white text-xl right-10">Helmets</p>
              <div className="relative px-12 py-5 rounded-full bg-gradient-to-r from-orange-500  to-pink-300 -top-24 right-7 filter blur-3xl  "></div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="p-4">
                <img
                  src={leftHandGlove}
                  alt="leftHandGlove"
                  className="absolute h-56 w-56"
                />

                <img
                  src={rightHandGlove}
                  alt="rightHandGlove"
                  className="relative h-56 w-56"
                />
              </div>
              <p className=" text-white text-xl">Gloves</p>

              <div className="relative px-12 py-5 rounded-full bg-gradient-to-r from-orange-500  to-pink-300 -top-16  right-3 filter blur-3xl  "></div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img
                src={rearPassengerBackseat}
                alt="helmet"
                className="abosolute inset-0 object-cover rounded-full h-56 w-56 p-4"
              />
              <p className=" text-white text-xl">Rear Passenger Backseat</p>
              <div className="relative px-12 py-5 rounded-full bg-gradient-to-r from-orange-500  to-pink-300 -top-24 right-7 filter blur-3xl  "></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:gap-10 content-center text-center">
            <div className="flex flex-col justify-center items-center">
              <img
                src={topCase}
                alt="helmet"
                className="abosolute inset-0 object-cover rounded-full h-56 w-56 p-4"
              />

              <p className=" text-white text-xl">Top Case</p>

              <div className="relative px-12 py-5 rounded-full bg-gradient-to-r from-orange-500  to-pink-300 -top-24 right-7 filter blur-3xl  "></div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img
                src={phoneHolder}
                alt="helmet"
                className="abosolute inset-0 object-cover rounded-full h-56 w-56 p-4"
              />

              <p className=" text-white text-xl">Phone Holders</p>

              <div className="relative px-12 py-5 rounded-full bg-gradient-to-r from-orange-500  to-pink-300 -top-24 right-7 filter blur-3xl"></div>
            </div>
          </div>
        </div>
      )}


      {selectedLanguage === "French" && (
        <div className="flex flex-col space-y-2 font-manrope justify-center items-center text-center p-10 relative">
          <h2 className="text-white text-5xl mb-16">
          Le petit{" "}
            <span className="bg-gradient-to-r text-5xl  from-amber-600 via-pink-900 to-purple-900 text-transparent bg-clip-text  font-bold lg:text-center text-left">
            magasin{" "}
            </span>{" "}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 lg:gap-10 content-center text-center">
            <div className="flex flex-col justify-center items-center">
              <img
                src={helmetImg}
                alt="helmet"
                className="abosolute h-56 w-56 p-4"
              />
              <p className=" text-white text-xl right-10">Casque</p>
              <div className="relative px-12 py-5 rounded-full bg-gradient-to-r from-orange-500  to-pink-300 -top-24 right-7 filter blur-3xl  "></div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="p-4">
                <img
                  src={leftHandGlove}
                  alt="leftHandGlove"
                  className="absolute h-56 w-56"
                />

                <img
                  src={rightHandGlove}
                  alt="rightHandGlove"
                  className="relative h-56 w-56"
                />
              </div>
              <p className=" text-white text-xl">Gants</p>

              <div className="relative px-12 py-5 rounded-full bg-gradient-to-r from-orange-500  to-pink-300 -top-16  right-3 filter blur-3xl  "></div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img
                src={rearPassengerBackseat}
                alt="helmet"
                className="abosolute inset-0 object-cover rounded-full h-56 w-56 p-4"
              />
              <p className=" text-white text-xl">Siège arrière</p>
              <div className="relative px-12 py-5 rounded-full bg-gradient-to-r from-orange-500  to-pink-300 -top-24 right-7 filter blur-3xl  "></div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:gap-10 content-center text-center">
            <div className="flex flex-col justify-center items-center">
              <img
                src={topCase}
                alt="helmet"
                className="abosolute inset-0 object-cover rounded-full h-56 w-56 p-4"
              />

              <p className=" text-white text-xl">Top Case</p>

              <div className="relative px-12 py-5 rounded-full bg-gradient-to-r from-orange-500  to-pink-300 -top-24 right-7 filter blur-3xl  "></div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img
                src={phoneHolder}
                alt="helmet"
                className="abosolute inset-0 object-cover rounded-full h-56 w-56 p-4"
              />

              <p className=" text-white text-xl">supports de téléphone</p>

              <div className="relative px-12 py-5 rounded-full bg-gradient-to-r from-orange-500  to-pink-300 -top-24 right-7 filter blur-3xl"></div>
            </div>
          </div>
        </div>
      )}

    </div>
    </>
  );
}

export default BikeAccessories;
