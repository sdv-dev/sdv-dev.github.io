import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (window.innerWidth >= 1024) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    } else {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
