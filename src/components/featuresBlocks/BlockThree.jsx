import React from "react";
import rowthree from "../../utils/imgrow-3.png";
import { setLanguage, selectLanguage } from "../../store/languageSlice";
import { useSelector, useDispatch } from "react-redux";
const BlockThree = () => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <div className="overflow-hidden bg-neutral-900  font-manrope">
      {selectedLanguage === "English" && (
        <div className="mx-auto max-w-7xl md:p-10 lg:p-20 lg:mt-10 md:mt-10 mt-10">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg lg:mt-20">
                <p className="mt-2 text-5xl font-bold tracking-tight text-white  ">
                  Streamlined Mobility Simplified
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-100 hidden lg:block md:block">
                  Embrace effortless urban travel with our intuitive and
                  user-friendly smart moped hailing app, designed to simplify
                  your journey through city streets with ease and simplicity.
                </p>
              </div>
            </div>
            <img src={rowthree} width={2432} height={1442} />
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-100 md:hidden lg:hidden">
            Embrace effortless urban travel with our intuitive and user-friendly
            smart moped hailing app, designed to simplify your journey through
            city streets with ease and simplicity.
          </p>
        </div>
      )}
      {selectedLanguage === "French" && (
        <div className="mx-auto max-w-7xl md:p-10 lg:p-20 lg:mt-10 md:mt-10 mt-10">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg lg:mt-20">
                <p className="mt-2 text-5xl font-bold tracking-tight text-white  ">
                  Mobilité Simplifié
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-100 hidden lg:block md:block">
                  Adoptez les déplacements urbains sans effort grâce à notre
                  application d'appel de coscooting intelligents, intuitive et
                  conviviale, Conçu pour simplifier vos voyages dans les rues de
                  la ville avec facilité et simplicité
                </p>
              </div>
            </div>
            <img src={rowthree} width={2432} height={1442} />
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-100 md:hidden lg:hidden">
            Adoptez les déplacements urbains sans effort grâce à notre
            application d'appel de coscooting intelligents, intuitive et
            conviviale, Conçu pour simplifier vos voyages dans les rues de la
            ville avec facilité et simplicité
          </p>
        </div>
      )}
    </div>
  );
};

export default BlockThree;
