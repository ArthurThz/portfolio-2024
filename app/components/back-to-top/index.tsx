/* eslint-disable prettier/prettier */
"use client";
import React, { useCallback, useEffect, useState } from "react";
import Button from "../button";
import { TbArrowNarrowUp } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true);
    if (show && window.scrollY <= 500) setShow(false);
  }, [show]);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
          className="fixed right-4 bottom-4 z-20"
        >
          <Button
            onClick={scrollTop}
            className="shadow-lg shadow-emerald-400/20"
          >
            <TbArrowNarrowUp size={20} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
