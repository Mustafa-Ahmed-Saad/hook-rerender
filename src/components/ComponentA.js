import React from "react";
import useCount from "../hooks/useCount";

export default function ComponentA() {
  const { count, increment } = useCount();
  return (
    <div>
      ComponentA {count}
      <button onClick={increment}>+</button>
    </div>
  );
}
