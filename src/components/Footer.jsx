import React from "react";
import { setLanguage, selectLanguage } from "../store/languageSlice";
import footerImg from "../utils/footerimg.png";
import smallLogo from "../utils/small logo.png";
import { useSelector, useDispatch } from "react-redux";
import {
  FaSnapchatGhost,
  FaTiktok,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const selectedLanguage = useSelector(selectLanguage);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="h-screen flex flex-col bg-neutral-900">
      <div className="flex-grow bg-neutral-800 rounded-t-3xl">
        <img
          src={smallLogo}
          alt="logo-small"
          className="mx-auto h-12 w-12 mt-24"
        />
        <div className="flex flex-col mx-auto space-x-5 mt-10 bg-neutral-800 w-full">
          <div className="mx-auto flex space-x-10">
            <FaSnapchatGhost className="text-2xl text-white" />
            <FaTiktok className="text-2xl text-white" />
            <a href="https://www.facebook.com/">
              <FaFacebookF className="text-2xl text-white" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram className="text-2xl text-white" />
            </a>

            <a href="https://mail.google.com/mail/u/0/#inbox">
              <MdEmail className="text-2xl text-white" />
            </a>
          </div>
        </div>
        {selectedLanguage === "English" && (
          <div className="flex flex-col mx-auto space-x-5 mt-10 bg-neutral-800 w-full">
            <div className="mx-auto flex space-x-10">
              <h6 className="text-gray-500">About</h6>
              <h6 className="text-gray-500">Become a driver</h6>
              <h6 className="text-gray-500">Contact Us</h6>
            </div>
          </div>
        )}
        {selectedLanguage === "French" && (
          <div className="flex flex-col mx-auto space-x-5 mt-10 bg-neutral-800 w-full">
            <div className="mx-auto flex space-x-10">
              <h6 className="text-gray-500">A propos</h6>
              <h6 className="text-gray-500">Devenir Driver</h6>
              <h6 className="text-gray-500">Nous contacter</h6>
            </div>
          </div>
        )}
      </div>

      <div className="relative w-full bg-neutral-800 mt-auto flex">
        <img
          src={footerImg}
          alt="footerImg"
          className="w-full h-full mt-auto"
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={scrollToTop}
        >
          <button className="bg-orange-600 p-3 border-2 border-white hover:bg-orange-400 rounded-xl shadow-lg animate-pulse">
            <FaArrowUp className="text-2xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
