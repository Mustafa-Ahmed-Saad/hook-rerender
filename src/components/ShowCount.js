import React from "react";
import useCount from "../hooks/useCount";

export default function ShowCount() {
  const { count } = useCount();
  return <div>{count}</div>;
}
