import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
