import "./App.css";
import Footer from "./Components/Footer/Footer.jsx";
import Hero from "./Components/Hero/Hero";
import Join from "./Components/JoinUs/Join.jsx";
import Plans from "./Components/Plans/Plans";
import Programs from "./Components/Programs/Programs";
import Reasons from "./Components/Reasons/Reasons.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
