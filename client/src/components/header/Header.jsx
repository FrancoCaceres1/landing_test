import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import styles from "./Header.module.css";

function Header() {
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);

  const handleButtonClick = (event) => {
    event.stopPropagation();
    setOpened(!opened);
  };

  const handleNavigate = (dir) => {
    navigate(dir);
    setOpened(false);
  };

  const handleCloseMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && opened) {
      setOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseMenu);

    return () => {
      document.removeEventListener("click", handleCloseMenu);
    };
  }, [opened]);

  return (
    <header>
      <section className={styles.titleSection}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>IQNet</h2>
        </div>
        <div className={styles.listButtonContainer}>
          <button className={styles.listButton} onClick={handleButtonClick}>
            {opened ? <FaAngleUp /> : <IoMenu />}
          </button>
          {opened && (
            <div ref={menuRef} className={styles.listContainer}>
              <ul className={styles.list}>
                <li
                  className={styles.listItem}
                  onClick={() => handleNavigate("/")}
                >
                  Inicio
                </li>
                <li className={styles.listItem} onClick={() => handleNavigate("/services")}>Nuestros Servicios</li>
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
