import React from "react";
import rowone from "../../utils/imgrow1.png";
import { setLanguage, selectLanguage } from "../../store/languageSlice";
import { useSelector, useDispatch } from "react-redux";

const BlockOne = () => {
      const selectedLanguage = useSelector(selectLanguage);
  return (
    <div className="overflow-hidden bg-neutral-900  font-manrope">
      {selectedLanguage === "English" && (
        <div className="mx-auto max-w-7xl md:p-10 lg:p-20 lg:mt-10 md:mt-10 mt-10">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg lg:mt-20">
                <p className="mt-2 text-5xl font-bold tracking-tight text-white  ">
                  Spontaneous or Scheduled Adventures
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-100 hidden lg:block md:block">
                  Whether you're seizing the moment or planning ahead, our app
                  caters to both immediate and scheduled trips, ensuring you're
                  always on time for your next adventure.
                </p>
              </div>
            </div>
            <img src={rowone} width={2432} height={1442} />
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-100 md:hidden lg:hidden">
            Whether you're seizing the moment or planning ahead, our app caters
            to both immediate and scheduled trips, ensuring you're always on
            time for your next adventure.
          </p>
        </div>
      )}
      {selectedLanguage === "French" && (
        <div className="mx-auto max-w-7xl md:p-10 lg:p-20 lg:mt-10 md:mt-10 mt-10">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg lg:mt-20">
                <p className="mt-2 text-5xl font-bold tracking-tight text-white  ">
                  En mode Spontané ou Programmé
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-100 hidden lg:block md:block">
                  Que vous profitiez du moment présent ou que vous planifiez à
                  l'avance, notre application s'adapte aux voyages immédiats et
                  programmés, vous garantissant ainsi d'être toujours à l'heure
                  pour votre prochaine aventure
                </p>
              </div>
            </div>
            <img src={rowone} width={2432} height={1442} />
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-100 md:hidden lg:hidden">
            Que vous profitiez du moment présent ou que vous planifiez à
            l'avance, notre application s'adapte aux voyages immédiats et
            programmés, vous garantissant ainsi d'être toujours à l'heure pour
            votre prochaine aventure
          </p>
        </div>
      )}
    </div>
  );
};

export default BlockOne;
