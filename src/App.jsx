import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="image">
        <img src="./src/images/Fail Big Dream Big.jpg" alt="" />
      </div>
    </>
  );
}

export default App
