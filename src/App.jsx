import React, { useState } from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import "./App.scss";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar
        theme={theme}
        setTheme={() => {
          theme === "light" ? setTheme("dark") : setTheme("light");
        }}
      />
      <Home theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
