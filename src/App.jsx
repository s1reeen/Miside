import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "modern-normalize/modern-normalize.css";
import "./App.css";
import Features from "./components/Features/Features";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="wrapper">
        <AboutUs />
        <Features />
      </div>
    </div>
  );
};
export default App;
