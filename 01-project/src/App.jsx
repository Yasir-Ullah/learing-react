// import { useState } from "react";
import Navbar from "./compontes/Navbar";
import TextForm from "./compontes/TextForm";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <TextForm heading="Enter  the text to analyze below" />
      </div>
    </>
  );
}

export default App;
