import React from "react";
import phoneimg from "../utils/cta.png";
import { IoMdDownload } from "react-icons/io";
import { setLanguage, selectLanguage } from "../store/languageSlice";
import { useSelector, useDispatch } from "react-redux";
import appImg from './img/appImg.png'

const Cta = () => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
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
                  <p className="mt-10  tracking-tight text-white text-6xl font-manrope">
                    Get Started Now <br />
                    For Free
                  </p>
                  <p className="text-white mx-auto mt-4">
                    Well, what do you waiting for? Let’s download the app now
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
                  <p className="mt-10  tracking-tight text-white text-6xl font-manrope">
                    C'est parti!
                  </p>
                  <p className="text-white mx-auto mt-4">
                    Ne perdez plus de temps et faites Despii !
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
          <p className="mt-10  tracking-tight text-white text-6xl font-manrope">
            Get Started Now <br />
            For Free
          </p>
          <p className="text-white mx-auto mt-4">
            Well, what do you waiting for? Let’s download the app now
          </p>
          <button className="flex bg-black/90 p-3 w-full rounded-2xl hover:scale-110 font-bold transition-transform ease-in-out duration-300 justify-center items-center mt-10 mx-auto text-white">
            <img src={appImg} alt="app-image" className="mr-4" />
            Download The App
          </button>
        </div>
      )}
      {selectedLanguage === "French" && (
        <div className="lg:hidden mt-10">
          <p className="mt-10  tracking-tight text-white text-6xl font-manrope">
            C'est parti!
          </p>
          <p className="text-white mx-auto mt-4">
            Ne perdez plus de temps et faites Despii !
          </p>
          <button className="flex bg-black/90 p-3 w-full rounded-2xl hover:scale-110 font-bold transition-transform ease-in-out duration-300 justify-center items-center mt-10 mx-auto text-white">
            <img src={appImg} alt="app-image" className="mr-4" />
            Télécharger l'app
          </button>
        </div>
      )}
    </div>
  );
};

export default Cta;
