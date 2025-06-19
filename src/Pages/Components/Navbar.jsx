import {
  animate,
  AnimatePresence,
  delay,
  motion,
  transform,
} from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = ({ isMenu, setIsMenu }) => {
  const handleisMenu = () => {
    setIsMenu(true);
    document.body.style.overflow = "hidden";
  };

  const navVars = {
    initial: {
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {!isMenu && (
          <motion.div
            variants={navVars}
            initial="initial"
            animate="animate"
            className="sticky z-10 top-0 left-0 w-full px-6 py-4 flex justify-between items-center"
          >
            <Link
              to={"/"}
              className="craftr1 section cursor-pointer text-xl z-10 sm:text-2xl lg:text-3xl"
            >
              <span>Craftr</span>
            </Link>
            <Link
              onClick={handleisMenu}
              className="craftr3 section cursor-pointer text-sm font-semibold"
            >
              <span>MENU</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMenu && <NavMenu setIsMenu={setIsMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

const NavMenu = ({ setIsMenu }) => {
  const handleIsMenu = () => {
    setIsMenu(false);
    document.body.style.overflow = "auto";
  };

  const menuVars = {
    initial: {
      scaleY: 0,
      originY: 1,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      originY: -1,
      translateY: "-20%",
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0.5],
      },
    },
  };

  const navOptionVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.1,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const lineVars = {
    initial: {
      width: "0%",
      transition: {
        duration: 0.65,
      },
    },
    open: {
      width: "100%",
      transition: {
        duration: 0.65,
      },
    },
  };

  const childrenVars = {
    initial: {
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={menuVars}
      animate="animate"
      initial="initial"
      exit="exit"
      id="nav-menu"
      className="sticky top-0 flex text-white flex-col justify-between items-center z-[100] left-0 w-full h-screen bg-[#0D0D0D]"
    >
      <div className="sticky z-50 top-0 left-0 w-full px-6 py-4 flex  justify-between items-center">
        <Link
          to={"/"}
          onClick={handleIsMenu}
          className="craftr1 cursor-pointer text-xl z-10 sm:text-2xl lg:text-3xl"
        >
          Craftr
        </Link>
        <button
          onClick={handleIsMenu}
          className="craftr3 cursor-pointer text-sm font-semibold"
        >
          CLOSE
        </button>
      </div>
      <div className="w-full h-[90vh] flex justify-center items-center font-thin ">
        <motion.div
          variants={containerVars}
          initial="initial"
          animate="open"
          className="w-full xl:w-[60vw] group px-8 md:p-0"
        >
          <div className="w-full justify-center overflow-hidden items-center">
            <motion.div
              variants={navOptionVars}
              className={`craftr2 group-hover:opacity-10 hover:opacity-100 transition-all ease-in-out duration-[0.9s] w-full text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl flex justify-between items-start cursor-pointer font-semibold group/nested`}
            >
              <span className="text-lg">01</span>
              <Link
                to={"/work"}
                onClick={handleIsMenu}
                className="group-hover/nested:translate-x-[-10px] transition-all ease-in-out duration-[0.9s]"
              >
                WORKS
              </Link>
            </motion.div>
          </div>
          <motion.hr
            variants={lineVars}
            className="border-t origin-left border-white my-4 w-full"
          />
          <div className="w-full justify-center overflow-hidden items-center">
            <motion.div
              variants={navOptionVars}
              className={`craftr2 group-hover:opacity-10 hover:opacity-100 transition-all ease-in-out duration-[0.9s] w-full text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl flex justify-between items-start cursor-pointer font-semibold group/nested`}
            >
              <span className="text-lg">02</span>
              <Link
                to={"/about"}
                onClick={handleIsMenu}
                className="group-hover/nested:translate-x-[-10px] transition-all ease-in-out duration-[0.9s]"
              >
                ABOUT
              </Link>
            </motion.div>
          </div>
          <motion.hr
            variants={lineVars}
            className="border-t origin-left border-white my-4 w-full"
          />
          <div className="w-full justify-center overflow-hidden items-center">
            <motion.div
              variants={navOptionVars}
              className={`craftr2 group-hover:opacity-10 hover:opacity-100 transition-all ease-in-out duration-[0.9s] w-full text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl flex justify-between items-start cursor-pointer font-semibold group/nested`}
            >
              <span className="text-lg">03</span>
              <Link
                to={"/contact"}
                onClick={handleIsMenu}
                className="group-hover/nested:translate-x-[-10px] transition-all ease-in-out duration-[0.9s]"
              >
                CONTACT
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={containerVars}
        initial="initial"
        animate="open"
        className="w-full flex justify-between items-center craftr3 px-4 py-4"
      >
        <div className="overflow-hidden">
          <motion.p
            variants={childrenVars}
            className="cursor-pointer max-md:text-[0.68rem]"
          >
            © 2025 Studio Olimpo
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p
            variants={childrenVars}
            className="cursor-pointer max-md:text-[0.68rem]"
          >
            INSTAGRAM
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};
