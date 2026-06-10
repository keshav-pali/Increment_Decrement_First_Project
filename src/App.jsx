import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  function Reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>Counter : {count}</p>

      <div className="buttons">
        <Button text="😍 Increment" func={Increment} />
        <Button text="😒 Decrement" func={Decrement} />
        <Button text="😭 Reset" func={Reset} />
      </div>
    </div>
  );
};

function Button({ text, func }) {
  return (
    <button onClick={func}>
      {text}
    </button>
  );
}

export default App;