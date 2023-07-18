import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((state) => state + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
