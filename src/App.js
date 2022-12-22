import Header from "./Components/Header/header";
import Hero from "./Components/Hero/hero";
import Slider from "./Components/slider/slider";
import Virtual from "./Components/Virtual/virtual";
import Products from "./Components/Products/products";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Footer/>
    </div>
  );
}

export default App;
