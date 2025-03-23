import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import useLocoScroll from "./hooks/useLocoScroll";
import Layout from "./Pages/Components/Layout";
import Work from "./Pages/Work/Work.jsx";
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
