import { useState } from "react";
import Navbar from "./compontes/Navbar";
import About from "./compontes/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <About />
    </>
  );
}

export default App;
