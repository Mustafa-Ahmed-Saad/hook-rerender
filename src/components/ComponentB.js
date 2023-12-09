import React from "react";
import useCount from "../hooks/useCount";

export default function ComponentB() {
  const { count, decrement } = useCount();
  return (
    <div>
      ComponentB {count}
      <button onClick={decrement}>-</button>
    </div>
  );
}
