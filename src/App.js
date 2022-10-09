import React from "react";
import MainLayouts from "./components/Layouts/main.layouts";
import Navigation from "./components/Layouts/navigation.layouts";
import About from "./components/Contents/about.contents";
import Projects from "./components/Contents/project.contents";
import Skills from "./components/Contents/skill2.contents";
import Contact from "./components/Contents/contact.contents";
import Profile from "./components/Contents/profile.contents";
import Experience from "./components/Contents/experience.contents";

const App = () => {
  return (
    <MainLayouts>
      <Navigation />
      <About />
      <Profile />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </MainLayouts>
  );
};

export default App;
