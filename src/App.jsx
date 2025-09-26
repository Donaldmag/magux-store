import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/headercss/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <div className="min-h-screen w-full relative bg-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#ffffff",
          backgroundImage: `
            radial-gradient(
              circle at top center,
              rgba(70, 130, 180, 0.5),
              transparent 70%
            )
          `,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="absolute w-full h-full z-100">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
