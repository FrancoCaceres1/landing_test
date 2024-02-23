import Cards from "../cards/Cards";
import styles from "./Connect.module.css";

function Connect() {
  return (
    <section className={styles.mainSection}>
      <div className={styles.subContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>Conectate con IQnet</p>
        </div>
        <div className={styles.cardsContainer}>
          <Cards
            title1={"Primer"}
            title2={"Plan"}
            edge={true}
            text={"lorem fdasdf asdf sadfas fdff dfs asdf dff fdsaas"}
            color={"#946000"}
          />
          <Cards
            title1={"Segundo"}
            title2={"Plan"}
            edge={true}
            text={"Lorem ipsum dolor sit amet adipisicing elit. Explicabo?"}
            color={"#E49400"}
          />
          <Cards
            title1={"Tercer"}
            title2={"Plan"}
            edge={false}
            text={"Lorem ipsum dolor sit amet consectetur sit."}
            color={"#0E0F0F"}
          />
          <Cards
            title1={"Cuarto"}
            title2={"Plan"}
            edge={true}
            text={
              "Lorem ipsum dolor amet consectetur, adipisicing elit. Fuga, rerum."
            }
            color={"#2c2c2c"}
          />
          <section className={styles.cardSection}>
            <div className={styles.container}>
              <div className={styles.titleCardContainer}>
                <h2 className={styles.titleCard}>
                  Baja del <br />
                  Servicio
                </h2>
              </div>
              <div className={styles.textContainer}>
                <p className={styles.text}>
                  Si ya sos cliente de IQNet y querés pedir la baja del
                  servicio, hacé clic en el botón para comunicarte con un
                  representante comercial
                </p>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.button}>SOLICITAR LA BAJA</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Connect;
