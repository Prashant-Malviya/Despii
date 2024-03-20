import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, setLanguage } from "../../store/languageSlice";
import { selectDarkMode, toggleDarkMode } from "../../store/darkModeSlice";
import appIcon from "./img/despii icon.png";
import { MdUnarchive } from "react-icons/md";
import { Dialog, Menu } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import DespiiBgImg from "./img/despii bg image.png";
import BikeImg from "./img/bike image.png";
import { ImCross } from "react-icons/im";


function Herotwo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
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
    <div className="bg-black h-screen z-50">
      <header className="absolute inset-x-0 top-0  bg-black">
        <nav
          className="flex items-center justify-between p-6 lg:px-8 "
          aria-label="Global"
        >
          <div className="flex lg:flex-1 p-5">
            <span className="sr-only">Your Company</span>
            <a href="/" aria-label="Home">
              <motion.img
                className="h-8 w-auto"
                src={appIcon}
                alt="app icon"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ display: "inline-block" }}
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-4 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* <MdUnarchive className="h-6 w-6" aria-hidden="true" /> */}
              <GiHamburgerMenu
                className="text-white h-8 w-8"
                aria-hidden="true"
              />
            </button>
          </div>
          <Menu as="div" className="relative  text-left hidden lg:block">
            <div>
              <Menu.Button
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-100 bg-white/20  rounded-md shadow-sm hover:bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 "
                aria-label="Language Menu"
              >
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
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={appIcon} alt="appicon" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5  border border-red-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>

                <ImCross
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
                    <Menu.Button className="text-left flex w-full px-4 py-2 text-sm font-medium text-gray-100 bg-white/20  rounded-md shadow-sm hover:bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
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

                <div className="py-2">
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

      <div className="mt-10 p-2 ">
        {selectedLanguage === "English" && (
          <div className="">
            <div className="flex justify-between p-10 absolute z-10">
              {/* Heading Section  */}
              <div className="">
                <h1 className="lg:text-6xl md:text-5xl font-bold tracking-tight  sm:text-5xl text-white ml-10 mr-7 mt-32 font-manrope">
                  The Future of Urban{" "}
                  <motion.span
                    className="bg-gradient-to-r from-amber-600 via-amber-700 to-pink-700 text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ display: "inline-block" }}
                  >
                    Transport
                  </motion.span>
                </h1>
              </div>

              {/* Bike Sectioin  */}
              <div className="">
                <img src={BikeImg} alt="Bike Image" />

                <p className="text-lg leading-8 text-white max-w-3xl font-manrope ">
                  Experience the future of urban transport with our eco-friendly
                  bike taxi service, providing swift and hassle-free rides
                  through bustling city streets.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-purple-800 rounded-full -left-24 p-44 mt-32 w-5 absolute filter blur-3xl bg-opacity-15"></div>
          </div>
        )}

        <img
          src={DespiiBgImg}
          alt="Despii Background Image"
          className="relative mt-20 top-60"
        />
      </div>
    </div>
  );
}

export default Herotwo;
