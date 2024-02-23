import Header from "./components/header/Header";
import Www from "./assets/www.jpg";
import { HiOutlinePlusCircle } from "react-icons/hi";
import styles from "./App.module.css";
import Connect from "./components/connect/Connect";
import HiringForm from "./components/hiringForm/HiringForm";

function App() {
  return (
    <main>
      <Header />
      <section className={styles.firstSection}>
        <div className={styles.imageContainer}>
          <img src={Www} alt="www" className={styles.imageWww} />
        </div>
        <div className={styles.textButtonContainer}>
          <p className={styles.textButtonParagraph}>
            Internet y Televisión HD Por Fibra Óptica
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.textButton}>
              <HiOutlinePlusCircle />
              <p>MÁS INFORMACIÓN AQUÍ</p>
            </button>
          </div>
        </div>
      </section>
      <section className={styles.secondSection}>
        <div className={styles.gradientOverlay}></div>
        <div className={styles.secondSectionContainer}>
          <p className={styles.secondText}>
            Pagá Online tu Servicio de Internet IQNet
          </p>
          <button className={styles.secondButton}>
            INGRESÁ AQUÍ A LA ZONA DE PAGO
          </button>
        </div>
      </section>
      <Connect />
      <HiringForm />
    </main>
  );
}

export default App;
