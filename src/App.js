import "./App2.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </ParallaxProvider>
  );
}

export default App;
