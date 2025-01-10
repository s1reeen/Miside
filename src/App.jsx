import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "modern-normalize/modern-normalize.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className="wrapper">
        <AboutUs />
      </div>
    </div>
  );
};
export default App;
