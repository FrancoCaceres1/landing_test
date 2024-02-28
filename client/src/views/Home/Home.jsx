import { useNavigate } from "react-router-dom";
import { HiOutlinePlusCircle } from "react-icons/hi";
import Www from "../../assets/www.jpg";
import Connect from "../../components/connect/Connect";
import HiringForm from "../../components/hiringForm/HiringForm";
import styles from "./Home.module.css";

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/services");
  };

  return (
    <>
      <section className={styles.firstSection}>
        <div className={styles.imageContainer}>
          <img src={Www} alt="www" className={styles.imageWww} />
        </div>
        <div className={styles.textButtonContainer}>
          <p className={styles.textButtonParagraph}>
            Internet y Televisión HD Por Fibra Óptica
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.textButton} onClick={handleNavigate}>
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
    </>
  );
}

export default Home;
