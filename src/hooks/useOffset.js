import { useState } from "react";

/**
 * A custom hook for managing scroll-based offset and loading more data.
 * @returns {Object} The current offset, a function to set loading status and a function to handle scrolling events.
 */
export const useOffset = (offsetInc) => {
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleScroll = (event) => {
    if (loading) return;
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;

    const maxScroll = Math.round(contentSize.height - layoutMeasurement.height);
    const currentScroll = Math.round(contentOffset.y);
    if (currentScroll >= maxScroll - currentScroll) {
      setLoading(true);
      setOffset((prev) => prev + offsetInc);
    }
  };

  return { offset, setLoading, handleScroll };
};