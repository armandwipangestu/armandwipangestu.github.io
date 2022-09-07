import React from "react";
import MainLayouts from "./components/Layouts/main.layouts";
import Navigation from "./components/Layouts/navigation.layouts";
import About from "./components/Contents/about.contents";
import Projects from "./components/Contents/project.contents";
import Skills from "./components/Contents/skill2.contents";

const App = () => {
  return (
    <MainLayouts>
      <Navigation />
      <About />
      <Projects />
      <Skills />
    </MainLayouts>
  );
};

export default App;
