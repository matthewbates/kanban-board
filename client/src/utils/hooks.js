import { useEffect } from "react";

// closes <Sidebar /> when a user clicks outside
export const useClickOutside = (ref, callback) => {
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      if (!ref.current.parentNode.contains(e.target)) {
        callback();
      }
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => ("mousedown", handleClickOutside);
  }, [ref, callback]);
};

// closes <Sidebar /> if window.innerWidth > 820px
export const useResize = (ref, setIsOpen) => {
  const handleResize = (e) => {
    if (e.target.innerWidth > 820) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize, handleResize");
  }, [ref]);
};
