import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Servicing from "./views/servicing/Servicing";
import Home from "./views/Home/Home";
import styles from "./App.module.css";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/services" element={<Servicing />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
