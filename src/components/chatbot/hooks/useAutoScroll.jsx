import { useEffect, useRef } from "react";

export const useAutoScroll = (dependency) => {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [dependency]);

  return containerRef;
};