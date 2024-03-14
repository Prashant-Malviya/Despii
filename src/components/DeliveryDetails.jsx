import React from "react";
import { useSelector } from "react-redux";
import { selectLanguage } from "../store/languageSlice";
import bgImg from "./img/bgImg.png";

function DeliveryDetails() {
  const selectedLanguage = useSelector(selectLanguage);


  const deliveryType = [
    "Express Delivery",
    "Sameday Delivery",
    "Scheduled Delivery",
  ];

  const deliveryType2 = ["Next-day Delivery", "Reverse Delivery"];

  const deliveryTypeFrench = [
    "Livraison Express",
    "Livraison dans la journée",
    "Livraison Programmé",
  ];


  const deliveryType2French = ["Livraison le lendemain", "Livraison retour"];


  return (
    <div className=" h-auto  bg-neutral-900">
      <div className="w-auto h-auto filter blur-xl bg-black absolute opacity-40"></div>
      <div className="w-auto h-auto filter blur-3xl bg-black absolute opacity-40"></div>

      {selectedLanguage === "English" && (
        <div className="flex flex-col space-y-2 font-manrope justify-center items-center text-center p-10 relative">
          <img
            src={bgImg}
            alt="bgImage"
            className="h-full w-full absolute object-cover opacity-20"
          />

          <h2 className="text-white text-5xl">
            However you ,{" "}
            <span className="bg-gradient-to-r text-5xl  from-amber-600 via-pink-900 to-purple-900 text-transparent bg-clip-text  font-bold lg:text-center text-left">
              need it delivered{" "}
            </span>{" "}
          </h2>

          {/* <div className="p-14 m-3 bg-pink-200 rounded-md">Express Delivery</div> */}
         
            <div className="grid lg:grid-cols-3 sm:grid-cols-1">
              {deliveryType.map((item, idx) => (
                <div
                  key={idx}
                  className="p-16 m-2 bg-gradient-to-b from-purple-300 to-orange-500 rounded-md filter font-extrabold text-white text-2xl"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
              {deliveryType2.map((item, idx) => (
                <div
                  key={idx}
                  className="p-16  m-2 bg-gradient-to-b from-purple-300 to-orange-500 rounded-md font-extrabold text-white text-2xl"
                >
                  {item}
                </div>
              ))}
            </div>
            

            <div>
              <p className="text-lg text-white">While live tracking the courier all long</p>
            </div>
          
        </div>
      )}

      {selectedLanguage === "French" && (
        <div className="flex flex-col space-y-2 font-manrope justify-center items-center text-center p-10 relative">
          <img
            src={bgImg}
            alt="bgImage"
            className="h-full w-full absolute object-cover opacity-20"
          />

          <h2 className="text-white text-5xl">
          Quelle que soit la manière dont tu ,{" "}
            <span className="bg-gradient-to-r text-5xl  from-amber-600 via-pink-900 to-purple-900 text-transparent bg-clip-text  font-bold lg:text-center text-left">
            veux être livré{" "}
            </span>{" "}
          </h2>

          {/* <div className="p-14 m-3 bg-pink-200 rounded-md">Express Delivery</div> */}
         
            <div className="grid lg:grid-cols-3 sm:grid-cols-1">
              {deliveryTypeFrench.map((item, idx) => (
                <div
                  key={idx}
                  className="p-16 m-2 bg-gradient-to-b from-purple-300 to-orange-500 rounded-md filter font-extrabold text-white text-2xl"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
              {deliveryType2French.map((item, idx) => (
                <div
                  key={idx}
                  className="p-16  m-2 bg-gradient-to-b from-purple-300 to-orange-500 rounded-md font-extrabold text-white text-2xl"
                >
                  {item}
                </div>
              ))}
            </div>

            <div>
              <p className="text-lg text-white">Avec un suivi en live de ton coli et du livreur.</p>
            </div>
          
        </div>
      )}
    </div>
  );
}

export default DeliveryDetails;
