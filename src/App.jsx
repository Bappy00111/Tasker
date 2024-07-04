import React from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";
import TaskerBord from "./Tasker/TaskerBord";

const App = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskerBord/>
      </div>
      <Footer />
    </div>
  );
};

export default App;
