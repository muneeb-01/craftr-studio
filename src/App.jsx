import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Layout from "./Pages/Components/Layout.jsx";
import Work from "./Pages/Work.jsx";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import LoadingScreen from "./Pages/Components/LoadingScreen.jsx";
import Lenis from "lenis";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Adjust smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      smooth: true,
      smoothTouch: false,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [location.pathname]);
  

  return (
      <AnimatePresence>
        <LoadingScreen key={"loading"}/>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        </Route>
      </Routes>
      </AnimatePresence>
  );
};

export default App;
