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
            edge={true}
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
            color={"#0E0F0F"}
          />
        </div>
      </div>
    </section>
  );
}

export default Connect;
