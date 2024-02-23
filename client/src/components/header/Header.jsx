import { IoMenu } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <section className={styles.titleSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>IQNet</h2>
        </div>
        <div className={styles.listButtonContainer}>
          <button className={styles.listButton}>
            <IoMenu />
          </button>
        </div>
      </section>
      <section className={styles.infoHeaderContainer}>
        <div className={styles.containerZone}>
          <div>
            <h4 className={styles.titleZone}>WhatsApp Zona 1</h4>
            <div>
              <p>Campo Grande</p>
              <p>Campo Viera</p>
            </div>
          </div>
          <div className={styles.numberCotainer}>
            <FaWhatsapp />
            <p>3456-323424</p>
          </div>
        </div>
        <span className={styles.line}></span>
        <div className={styles.containerZone}>
          <div>
            <h4 className={styles.titleZone}>WhatsApp Zona 2</h4>
            <div>
              <p>Campo Grande</p>
              <p>Campo Viera</p>
            </div>
          </div>
          <div className={styles.numberCotainer}>
            <FaWhatsapp />
            <p>3456-323424</p>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
