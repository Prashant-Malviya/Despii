import React, { useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode, selectDarkMode } from "../store/darkModeSlice";
import { setLanguage, selectLanguage } from "../store/languageSlice";
import { Menu, Transition, Dialog } from "@headlessui/react";
import HeroBg from "../utils/bg-main.png";
import { heroSvg } from "../svgs";
import { MdUnarchive } from "react-icons/md";
import bike from "../utils/32 1.png";
import appIcon from "../utils/appIcon.png";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectDarkMode);
  const selectedLanguage = useSelector(selectLanguage);

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
    // You can implement further logic here based on the selected language
  };

  const toggleMode = () => {
    dispatch(toggleDarkMode());
  };
  const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ];

  return (
    <>
      <div>
        <header className="absolute inset-x-0 top-0 z-50 ">
          <nav
            className="flex items-center justify-between p-6 lg:px-8 "
            aria-label="Global"
          >
            <div className="flex lg:flex-1 p-5">
              <span className="sr-only">Your Company</span>
              <motion.img
                className="h-8 w-auto"
                src={appIcon}
                alt=""
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ display: "inline-block" }}
              />
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <MdUnarchive className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Menu as="div" className="relative  text-left hidden lg:block">
              <div>
                <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-100 bg-white/20  rounded-md shadow-sm hover:bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ">
                  {selectedLanguage}
                  <FaChevronDown
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white/20 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => handleLanguageChange("English")}
                        className={`${
                          active
                            ? "bg-gray-100/20 text-gray-100"
                            : "text-gray-200"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        English
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => handleLanguageChange("French")}
                        className={`${
                          active
                            ? "bg-gray-100/20 text-gray-100"
                            : "text-gray-200"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        French
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden h-[30vh]"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 bg-slate-900/90 ">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src={appIcon} alt="" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5  border border-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>

                  <MdUnarchive
                    className="h-6 w-6 text-orange-600"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="mt-6 flow-root ">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <Menu as="div" className="text-left ">
                    <div>
                      <Menu.Button className="text-left flex w-full px-4 py-2 text-sm font-medium text-gray-100 bg-white/20  rounded-md shadow-sm hover:bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ">
                        {selectedLanguage}
                        <FaChevronDown
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Menu.Items className=" right-0 w-full mt-2 origin-top-right bg-white/20 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => handleLanguageChange("English")}
                              className={`${
                                active
                                  ? "bg-gray-100/20 text-gray-100"
                                  : "text-gray-200"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              English
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => handleLanguageChange("French")}
                              className={`${
                                active
                                  ? "bg-gray-100/20 text-gray-100"
                                  : "text-gray-200"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              French
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Menu>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <div className="relative  overflow-hidden h-[30rem]  md:h-screen lg:h-screen z-40">
          <img
            src={HeroBg}
            alt=""
            className="absolute h-full w-full object-cover"
          />
          <div className="relative flex justify-center items-center lg:pt-[25rem] pt-[20rem] ">
            <img src={bike} alt="" className="absolute  object-cover " />
          </div>
          <div className=" flex relative h-96  w-full bg-black opacity-80 filter blur-3xl rounded-t-full justify-center items-center mx-auto bottom-10 lg:hidden md:hidden  z-10"></div>
          <div className="relative mx-auto max-w-6xl flex z-50 hidden lg:block md:block">
            {selectedLanguage === "English" && (
              <div className="text-center">
                <h1 className="lg:text-5xl md:text-4xl font-bold tracking-tight  sm:text-6xl text-white mx-auto mt-24 font-manrope">
                  Revisiting the urban{" "}
                  <motion.span
                    className="bg-gradient-to-r from-amber-600 via-amber-700 to-pink-700 text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ display: "inline-block" }}
                  >
                    transport industry
                  </motion.span>
                </h1>
                <p className="mb-4 text-lg leading-8 text-white max-w-3xl mx-auto font-manrope ">
                  The smart moped hailing app eco-friendly based on shared
                  economy, providing swift and hassle-free rides through
                  bustling city streets.
                </p>
              </div>
            )}
            {selectedLanguage === "French" && (
              <div className="text-center">
                <h1 className="text-5xl font-bold tracking-tight  sm:text-6xl text-white mx-auto mt-24 font-manrope">
                  Vas-y en{" "}
                  <motion.img
                    className="w-44"
                    src={appIcon}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ display: "inline-block" }}
                  />
                </h1>
                <p className="mt-6 text-lg leading-8 text-white max-w-3xl mx-auto font-manrope">
                  L'application de coscooting malin pour tes trajets urbains.
                </p>
              </div>
            )}
          </div>
          <div className=" flex relative h-full w-full bg-black opacity-100 filter blur-3xl rounded-t-full justify-center items-center mx-auto bottom-48 hidden lg:block md:block z-10"></div>
        </div>

        <div className="lg:hidded md:hidden bg-gradient-to-b from-black to-neutral-900 ">
          <div className="mx-4 max-w-6xl flex z-50  lg:block md:block p-5">
            {selectedLanguage === "English" && (
              <div className="text-left">
                <h1 className="text-5xl font-bold tracking-tight  sm:text-6xl text-white mx-auto mt-24 font-manrope">
                  Revisiting the urban{" "}
                  <motion.span
                    className="bg-gradient-to-r from-amber-600 via-amber-700 to-pink-700 text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ display: "inline-block" }}
                  >
                    transport industry
                  </motion.span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-white max-w-3xl mx-auto font-manrope">
                  The smart moped hailing app eco-friendly based on shared
                  economy, providing swift and hassle-free rides through
                  bustling city streets.
                </p>
              </div>
            )}
            {selectedLanguage === "French" && (
              <div className="text-left">
                <h1 className="text-5xl font-bold tracking-tight  sm:text-6xl text-white mx-auto mt-24 font-manrope">
                  Vas-y en{" "}
                  <motion.img
                    className="w-44"
                    src={appIcon}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ display: "inline-block" }}
                  />
                </h1>
                <p className="mt-6 text-lg leading-8 text-white max-w-3xl mx-auto font-manrope">
                  L'application de coscooting malin pour tes trajets urbains.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
