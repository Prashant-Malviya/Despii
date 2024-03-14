import React from "react";
import { setLanguage, selectLanguage } from "../store/languageSlice";
import { useSelector, useDispatch } from "react-redux";
import BlockOne from "./working-explain-blocks/BlockOne";
import BlockTwo from "./working-explain-blocks/BlockTwo";
import BlockThree from "./working-explain-blocks/BlockThree";

const WorkingExplainMain = () => {
  const selectedLanguage = useSelector(selectLanguage);
  return (
    <div className="bg-neutral-900 lg:p-20 py-20 px-10 font-manrope">
      {selectedLanguage === "English" && (
        <div className="flex flex-col">
          <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-pink-700 text-transparent bg-clip-text text-xl font-bold lg:text-center text-left">
            How it Works
          </span>
          <p className="text-white  text-5xl lg:text-6xl lg:text-center text-left mt-5 ">
            {" "}
            Got a moped?
          </p>
          <p className="text-white  text-5xl lg:text-6xl lg:text-center text-left mt-5 ">
            Do Yourself a favor by
            <span
              className="bg-gradient-to-r from-amber-600
          via-amber-700 to-pink-700 text-transparent bg-clip-text 
          font-bold lg:text-center text-left ml-2"
            >
              helping others!
            </span>
          </p>
        </div>
      )}
      {selectedLanguage === "French" && (
        <div className="flex flex-col">
          <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-pink-700 text-transparent bg-clip-text text-xl font-bold lg:text-center text-left">
            Comment ça marche?
          </span>
          <p className="text-white  text-5xl lg:text-6xl lg:text-center text-left mt-5 ">
            {" "}
            T'as un scooter?
          </p>
          <p className="text-white  text-5xl lg:text-6xl lg:text-center text-left mt-5 ">
            Rends-toi service en
            <span
              className="bg-gradient-to-r from-amber-600
          via-amber-700 to-pink-700 text-transparent bg-clip-text 
          font-bold lg:text-center text-left ml-2"
            >
              rendant service!
            </span>
          </p>
        </div>
      )}
      <BlockOne />
      <BlockTwo />
      <BlockThree />
    </div>
  );
};

export default WorkingExplainMain;
