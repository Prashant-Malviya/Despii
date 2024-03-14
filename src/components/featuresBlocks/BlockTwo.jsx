import React from "react";
import rowtwo from "../../utils/imgrow2.png";
import { setLanguage, selectLanguage } from "../../store/languageSlice";
import { useSelector, useDispatch } from "react-redux";

const BlockTwo = () => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <div className="overflow-hidden bg-neutral-900  font-manrope">
      {selectedLanguage === "English" && (
        <div className="mx-auto max-w-7xl md:p-10 lg:p-20 lg:mt-10 md:mt-10 mt-10">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <p className="lg:hidden md:hidden mt-2 text-5xl font-bold tracking-tight text-white  ">
              Safety & Thrifty
            </p>
            <img src={rowtwo} width={2432} height={1442} />
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg lg:mt-20">
                <p className="mt-2 text-5xl font-bold tracking-tight text-white hidden lg:block md:block  ">
                  Safety & Thrifty
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-100 hidden lg:block md:block items-end justify-end">
                  A reliable and affordable way to travel with our
                  safety-focused and cost-effective mobility solution, ensuring
                  peace of mind and savings on every ride.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-100 md:hidden lg:hidden">
            A reliable and affordable way to travel with our safety-focused and
            cost-effective mobility solution, ensuring peace of mind and savings
            on every ride.
          </p>
        </div>
      )}
      {selectedLanguage === "French" && (
        <div className="mx-auto max-w-7xl md:p-10 lg:p-20 lg:mt-10 md:mt-10 mt-10">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <p className="lg:hidden md:hidden mt-2 text-5xl font-bold tracking-tight text-white  ">
              Sécure et Pas cher
            </p>
            <img src={rowtwo} width={2432} height={1442} />
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg lg:mt-20">
                <p className="mt-2 text-5xl font-bold tracking-tight text-white hidden lg:block md:block  ">
                  Sécure et Pas cher
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-100 hidden lg:block md:block items-end justify-end">
                  Un moyen de voyage fiable et abordable avec notre solution de
                  mobilité axée sur la sécurité, garantissant une tranquillité
                  d'esprit et des économies à chaque trajet
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-100 md:hidden lg:hidden">
            Un moyen de voyage fiable et abordable avec notre solution de
            mobilité axée sur la sécurité, garantissant une tranquillité
            d'esprit et des économies à chaque trajet
          </p>
        </div>
      )}
    </div>
  );
};

export default BlockTwo;
