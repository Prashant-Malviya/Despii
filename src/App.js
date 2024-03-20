import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index";
// import Route1 from "./components/Routes/Route1";
// import Route2 from "./components/Routes/Route2";
import Route3 from "./components/Routes/Route3";
import {Helmet} from "react-helmet"
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import Herotwo from "./components/Extra Component/Herotwo";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>

          <Helmet>
          <title>Despii For Transport </title>
          <meta 
            name = "description"
            content="The smart moped hailing app eco-friendly based on shared economy, providing swift and hassle-free rides through bustling city streets."
          />
          <meta name="keywords" content="Transport,Easy Ride,Transport Service" />
          </Helmet>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/HeroSection" element={<HeroSection />} />
            <Route path="/HeroSection2" element={<HeroSection2 />} />
            <Route path="/route3" element={<Route3 />} />
            <Route path="/herotwo" element={<Herotwo />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
