import { useState } from "react";
function Greeting() {
  const [count,setCount] = useState(0);

  function updateCount() {
    setCount(count+1);
  }

  return (
    <div className="card">
      <h2>Hello from my custom component!</h2>
      <p>This is modular, reusable UI.</p>
      <button onClick={updateCount}>click me!{count}</button>
    </div>
  );
}

export default Greeting;