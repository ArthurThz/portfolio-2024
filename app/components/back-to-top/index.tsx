/* eslint-disable prettier/prettier */
"use client";
import React, { useCallback, useEffect, useState } from "react";
import Button from "../button";
import { TbArrowNarrowUp } from "react-icons/tb";

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
    <div className="fixed right-4 bottom-4 z-20">
      {show ? (
        <Button onClick={scrollTop} className="shadow-lg shadow-emerald-400/20">
          <TbArrowNarrowUp size={20} />
        </Button>
      ) : null}
    </div>
  );
};

export default BackToTop;
