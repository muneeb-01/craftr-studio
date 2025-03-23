import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import useLocoScroll from "./Pages/useLocoScroll.jsx";
import Layout from "./Pages/Components/Layout.jsx";
import Work from "./Pages/Work.jsx";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import LoadingScreen from "./Pages/Components/LoadingScreen.jsx";

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
