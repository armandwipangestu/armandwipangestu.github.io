import React from "react";
import MainLayouts from "./components/Layouts/main.layouts";
import Navigation from "./components/Layouts/navigation.layouts";
import About from "./components/Contents/about.contents";

const App = () => {
  return (
    <MainLayouts>
      <Navigation />
      <About />
    </MainLayouts>
  );
};

export default App;
