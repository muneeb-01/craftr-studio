import React,{useState,useEffect} from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);
    const [curPicture, setCurPicture] = useState(1);

    useEffect(() => {
        document.body.style.overflow = "hidden"
      let interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          setCurPicture((prevPic) => (prev < 60 ? Math.floor((prev + 10) / 10) : 6));
          return prev + 1;
        });
      }, 25); // Adjust speed by changing interval time
  
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
          setTimeout(() => {
            document.body.style.overflowY = "scroll"; // Enable scrolling when loading ends
          }, 500); // Delay to match the animation
        }
      }, [progress]);

  return (
    <motion.div
    initial={{ scaleY: 1 }}
    animate={{ scaleY: progress === 100 ? 0 : 1 }}
    exit={{ scaleY: 1 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="fixed flex justify-center items-center top-0 left-0 w-full h-screen  bg-[#F8F6F1] z-50 origin-top">
        <div 
        className="2xl:w-[15%] 2xl:h-[40%] xl:w-[20%] xl:h-[40%] sm:w-[75%] sm:h-[70%] md:w-[70%] lg:h-[50%] lg:w-[30%] w-[90%] h-[80%] origin-top">
            <p className="flex craftr3 mb-4 justify-between items-center "><span>CRAFTR STUDIO</span> <span>{progress+"%"}</span></p>
            <motion.div initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5,delay:2, ease: "easeInOut" }} className="origin-top w-full h-full">
                <img src={`/pictures/${curPicture}.avif`} className="w-full h-full object-cover" alt="" />
            </motion.div>
        </div>
    </motion.div>
  );
};

export default LoadingScreen;
