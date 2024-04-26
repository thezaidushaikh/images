import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="image">
        <img src="./images/Fail Big Dream Big.jpg" alt="Fail Big Dream Big" />
      </div>
      <a href="./docs/Zaid's Resume.pdf" download={"zaid's.pdf"}>
        <div className="download"><p>Download</p></div>
      </a>
    </>
  );
}

export default App;
