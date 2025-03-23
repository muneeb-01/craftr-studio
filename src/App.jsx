import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import useLocoScroll from "./hooks/useLocoScroll";
import Layout from "./Pages/Components/Layout";
import Work from "./Pages/Work/Work";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import LoadingScreen from "./Pages/Components/LoadingScreen";
const App = () => {
  const location = useLocation();
  useLocoScroll();
  return (
    <div data-scroll-container>
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
    </div>
  );
};

export default App;
