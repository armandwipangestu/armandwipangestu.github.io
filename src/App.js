import React from "react";
import MainLayouts from "./components/Layouts/main.layouts";
import Navigation from "./components/Layouts/navigation.layouts";

const App = () => {
  return (
    <MainLayouts>
      <Navigation />
    </MainLayouts>
  );
};

export default App;
