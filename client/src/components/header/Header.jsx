import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import styles from "./Header.module.css";

function Header() {
  const [opened, setOpened] = useState(false);

  const handlerOpenMenu = () => {
    setOpened(!opened);
  };

  return (
    <header>
      <section className={styles.titleSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>IQNet</h2>
        </div>
        <div className={styles.listButtonContainer}>
          <button className={styles.listButton} onClick={handlerOpenMenu}>
            {opened ? <FaAngleUp /> : <IoMenu />}
          </button>
          {opened && (
            <div className={styles.listContainer}>
              <ul className={styles.list}>
                <li className={styles.listItem}>Inicio</li>
                <li className={styles.listItem}>Nuestros Servicios</li>
                <li className={styles.listItem}>Planes y Precios</li>
                <li className={styles.listItem}>Contacto</li>
              </ul>
            </div>
          )}
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
