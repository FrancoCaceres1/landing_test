import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Servicing from "./views/servicing/Servicing";
import Home from "./views/Home/Home";
import Plans from "./views/plans/Plans";
import Contact from "./views/contact/Contact";
import styles from "./App.module.css";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/services" element={<Servicing />} />
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
