import { useNavigate } from "react-router-dom";
import Fibra from "../../assets/fibra.jpg";
import styles from "./Servicing.module.css";

function Servicing() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/plans");
  };

  return (
    <section>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Nuestros Servicios</h1>
        </div>
      </div>
      <section className={styles.firstSection}>
        <div>
          <div className={styles.firstSubtitleContainer}>
            <h2 className={styles.firstSubtitle}>
              Servicio de Internet por Fibra Óptica
            </h2>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={Fibra}
              alt="imagen de fibra optica"
              className={styles.img}
            />
          </div>
        </div>
        <div>
          <div className={styles.textContainer}>
            <p className={styles.p}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, commodi.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              vitae voluptatem, rerum minima id autem voluptatibus non placeat
              animi facilis?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et rem
              tenetur animi minus hic, aspernatur assumenda nulla nesciunt neque
              dicta maxime iste vero esse, dolore repellendus fuga est
              laudantium velit expedita placeat, dignissimos optio? Provident et
              voluptate earum debitis itaque?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              sit eos minus porro! Iure placeat mollitia sunt quis, amet autem
              impedit beatae cumque architecto dolorem labore commodi minus qui
              eligendi omnis. Voluptatibus sunt, harum error molestias veniam
              repellendus praesentium consequatur!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              fugit qui expedita veritatis architecto tempora quo consequuntur
              repellat, temporibus nulla, debitis aut officiis vel? Iusto iste
              rerum vel accusamus voluptas!
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.pricesButton} onClick={handleNavigate}>
              VER NUESTRO PLANES Y PRECIOS
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.secondSubtitleContainer}>
          <h2 className={styles.secondSubtitle}>
            Zonas con cobertura de Fibra Óptica
          </h2>
        </div>
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            <li>Zona 1</li>
            <li>Zona 2</li>
            <li>Zona 3</li>
            <li>Zona 4</li>
            <li>Zona 5</li>
            <li>Zona 6</li>
            <li>Zona 7</li>
          </ul>
        </div>
      </section>
    </section>
  );
}

export default Servicing;
