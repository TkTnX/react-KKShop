import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./Navbar";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const spanVariant1 = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: "45deg",
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const spanVariant2 = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  };
  const spanVariant3 = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: "-45deg",
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const listVariant = {
    closed: {
      x: "-100%",
      opacity: 0,
    },
    open: {
      x: "0%",
      opacity: 1,
    },
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-8 flex flex-col justify-between relative z-20 xl:hidden"
      >
        <motion.span
          variants={spanVariant1}
          animate={open ? "open" : "closed"}
          className="block bg-pink w-10 h-1 rounded origin-left"
        ></motion.span>
        <motion.span
          variants={spanVariant2}
          animate={open ? "open" : "closed"}
          className="block bg-pink w-10 h-1 rounded"
        ></motion.span>
        <motion.span
          variants={spanVariant3}
          animate={open ? "open" : "closed"}
          className="block bg-pink w-10 h-1 rounded origin-left"
        ></motion.span>
      </button>

      {open && (
        <motion.div
          variants={listVariant}
          animate="open"
          initial="closed"
          className="bg-pink fixed top-0 left-0 w-full h-full"
        >
          <Navbar size="sm" />
        </motion.div>
      )}
    </>
  );
};

export default MobileMenu;
