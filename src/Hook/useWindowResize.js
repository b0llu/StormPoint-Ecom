import { useEffect, useState } from "react";

export const useWindowResize = () => {
  const [dimension, setDimension] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const resizeHandler = () => {
      setDimension({ height: window.innerHeight, width: window.innerWidth });
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });
  return { dimension };
};
