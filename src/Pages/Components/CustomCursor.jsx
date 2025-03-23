import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    if (window.innerWidth <= 820) return;

    const crsr = cursorRef.current;
    crsr.style.mixBlendMode = "difference";

    document.addEventListener("mouseenter", () => {
      gsap.to(crsr, { width: 20, height: 20, opacity: 1 });
    });

    document.addEventListener("mouseleave", () => {
      gsap.to(crsr, { width: 0, height: 0, opacity: 0 });
    });

    window.onmousemove = (e)=>{
      gsap.to(crsr, { x: e.pageX-10, y: e.pageY-10 });
      crsr.style.mixBlendMode = "difference";
    }
    return () => {
      document.removeEventListener("mouseenter", () => {});
      document.removeEventListener("mouseleave", () => {});
      document.removeEventListener("mousemove", () => {});
    };
  });

  return (
    <div
      ref={cursorRef}
      id="crsr"
      className="absolute bg-black top-0 left-0 z-[1000] rounded-full pointer-events-none"
    />
  );
};

export default CustomCursor;
