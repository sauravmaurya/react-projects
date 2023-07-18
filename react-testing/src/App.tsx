import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Test1 from "./components/test1/test1";
import Test3 from "./components/test3/test3";
import Skills from "./components/skills/skills";
import Counter from "./components/counter/counter";

function App() {
  // const skills = ["HTML", "CSS", "JS"];
  return (
    <>
      {/* <Test1 /> */}
      {/* <Test3 />
      <Skills skills={skills} /> */}
      <Counter />
    </>
  );
}

export default App;
