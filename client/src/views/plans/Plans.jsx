import Card from "../../components/card/Card";
import styles from "./Plans.module.css";

function Plans() {
  return (
    <section>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Planes y Precios</h1>
        </div>
      </div>
      <section className={styles.firstSection}>
        <div className={styles.firstSubtitleContainer}>
          <h2 className={styles.firstSubtitle}>Fibra Óptica</h2>
        </div>
        <div className={styles.cardsContainer}>
          <Card
            title1={"PRIMER PLAN"}
            title2={"FIBRA ÓPTICA"}
            price={"10203"}
            text={"Lorem ipsum dolor sit amet adipisicing elit. Explicabo?"}
            color={"#946000"}
          />
          <Card
            title1={"SEGUNDO PLAN"}
            title2={"FIBRA ÓPTICA"}
            price={"15203"}
            text={"Lorem ipsum dolor sit amet adipisicing elit. Explicabo?"}
            color={"#E49400"}
          />
          <Card
            title1={"CUARTO PLAN"}
            title2={"FIBRA ÓPTICA"}
            price={"23203"}
            text={"Lorem ipsum dolor sit amet adipisicing elit. Explicabo?"}
            color={"#2c2c2c"}
          />
        </div>
      </section>
      <section>
        <div className={styles.secondSubtitleContainer}>
          <h2 className={styles.secondSubtitle}>Internet Wireless</h2>
        </div>
        <div className={styles.cardsContainer}>
          <Card
            title1={"TERCER PLAN"}
            title2={"POR ANTENA"}
            price={"11253"}
            text={"Lorem ipsum dolor sit amet adipisicing elit. Explicabo?"}
            color={"#0E0F0F"}
          />
        </div>
      </section>
    </section>
  );
}

export default Plans;
