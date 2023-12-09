import { useState } from "react";

function getStoredCount() {
  const storedCount = localStorage.getItem("count");
  return storedCount ? JSON.parse(storedCount) : 0;
}

function setStoredCount(count) {
  // set count in local storage
  localStorage.setItem("count", JSON.stringify(count));
}

export default function useCount() {
  const [count, setCount] = useState(getStoredCount());

  const increment = () => {
    setStoredCount(count + 1);
    setCount(count + 1);
  };

  const decrement = () => {
    setStoredCount(count - 1);
    setCount(count - 1);
  };

  return { count, increment, decrement };
}
