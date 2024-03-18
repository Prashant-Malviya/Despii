import React from "react";
import phoneimg from "../utils/iphoneimg.png";
import { IoMdDownload } from "react-icons/io";
import { setLanguage, selectLanguage } from "../store/languageSlice";
import { useSelector, useDispatch } from "react-redux";
import appImg from "./img/appImg.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Features = () => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <>
    <Helmet>
      <title>Urban Transport</title>
      <meta name="description" content="The smart moped hailing app eco-friendly based on shared economy, providing swift and hassle-free rides through bustling city streets."/>
      
      <meta name="keywords" content="Transport,Easy Ride,Transport Service" />
    </Helmet>
<div className="p-10 lg:bg-gradient-to-b from-black to-neutral-900 bg-neutral-900">
    
    <div className=" overflow-hidden bg-[#DC6617] py-32 sm:py-32 rounded-3xl lg:h-[46rem] h-96 md:h-[46rem]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:grid max-w-2xl grid-cols-1 gap-x-8   lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <img
            src={phoneimg}
            alt="Product screenshot"
            className=" h-full w-auto mt-10"
          />
          {selectedLanguage === "English" && (
            <div className="hidden lg:block md:block  lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <div className="p-2 border-2 border-white rounded-2xl w-32">
                  <h2 className="text-base  leading-7 text-white font-semibold ">
                    OUR MISSION
                  </h2>
                </div>
                <p className="mt-10  tracking-tight text-white text-6xl font-manrope">
                  Introducing the <br /> Next Generation of <br />
                </p>
                <p className="p-3 bg-black/90 rounded-2xl mt-3 tracking-tight text-white text-5xl font-manrope w-fit">
                  Moped Mobility
                </p>
              </div>

              <button className="flex bg-black/90 p-3 px-3 rounded-2xl hover:scale-110 font-bold transition-transform ease-in-out duration-300 justify-center items-center mt-10 mx-5 text-white">
                <img src={appImg} alt="app-image" className="mr-4" />
                Download The App
              </button>
            </div>
          )}
          {selectedLanguage === "French" && (
            <div className="hidden lg:block md:block  lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <div className="p-2 border-2 border-white rounded-2xl w-36">
                  <h2 className="text-base  leading-7 text-white font-semibold ">
                    NORTE MISSION
                  </h2>
                </div>
                <p className="mt-10  tracking-tight text-white text-6xl font-manrope">
                  Un nouveau moyen <br />
                  de transport, basé <br />
                </p>
                <p className="p-3 bg-black/90 rounded-2xl mt-3 tracking-tight text-white text-5xl font-manrope w-fit">
                  sur l'économie de
                </p>
                <p className="  tracking-tight text-white text-6xl font-manrope">
                  partage.
                </p>
              </div>

              <button className="flex bg-black/90 p-3 px-3 rounded-2xl hover:scale-110 font-bold transition-transform ease-in-out duration-300 justify-center items-center mt-10 mx-5 text-white">
                <img src={appImg} alt="app-image" className="mr-4" />
                Télécharger l'app
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    {selectedLanguage === "English" && (
      <div className="lg:hidden mt-10">
        <div className="p-2 border-2 border-white rounded-2xl w-32">
          <h2 className="text-base  leading-7 text-white font-semibold ">
            OUR MISSION
          </h2>
        </div>
        <p className="mt-10  tracking-tight text-white text-6xl font-manrope">
          Introducing the <br /> Next Generation of <br /> Moped Mobility
        </p>
        <Link rel="canonical">
        <button className="flex bg-black/90 p-3 w-full rounded-2xl hover:scale-110 font-bold transition-transform ease-in-out duration-300 justify-center items-center mt-10 mx-auto text-white">
          <img src={appImg} alt="app-image" className="mr-4" />
          Download The App
        </button>
        </Link>
      </div>
    )}
    {selectedLanguage === "French" && (
      <div className="lg:hidden mt-10">
        <div className="p-2 border-2 border-white rounded-2xl w-36">
          <h2 className="text-base  leading-7 text-white font-semibold ">
            NORTE MISSION
          </h2>
        </div>
        <p className="mt-10  tracking-tight text-white text-6xl font-manrope">
          Un nouveau moyen <br /> de transport, basé <br /> sur l'économie de
          partage.
        </p>
        <button className="flex bg-black/90 p-3 w-full rounded-2xl hover:scale-110 font-bold transition-transform ease-in-out duration-300 justify-center items-center mt-10 mx-auto text-white">
          <img src={appImg} alt="app-image" className="mr-4" />
          Télécharger l'app
        </button>
      </div>
    )}
  </div>
    </>
    
  );
};

export default Features;
