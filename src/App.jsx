import React from "react";
import Header from "./components/Header";
import styles from "./App.module.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className={styles.locura}>HOLA MUNDO!</h1>
      <h1>QUE LOCURA</h1>
    </div>
  );
}

export default App;
