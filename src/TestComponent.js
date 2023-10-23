import React from "react";
import useCustomHook from "../hooks/useCustomHook";

const TestComponent = () => {
  const { data, fetchData } = useCustomHook();

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <div>{data}</div>
    </div>
  );
};

export default TestComponent;
