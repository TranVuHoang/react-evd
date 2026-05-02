import { useState } from "react";

// stateless functional component: component nhưng không sử dụng state
// stateful functional component: component có sử dụng state

// Ví dụ functional stateless
const Toggle = () => {
  return <div className="toggle"></div>;
};

// Ví dụ functional stateful
const Toggle2 = () => {
  // Sử sụng state:
  const [count, setCount] = useState();
  return <div className="toggle"></div>;
};
