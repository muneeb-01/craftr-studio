import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useLocoScroll = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
};

export default useLocoScroll;
