import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import Logo from "../../assets/logo.png";
import styles from "./Header.module.css";

function Header() {
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const home = location.pathname === "/";
  const services = location.pathname === "/services";
  const plans = location.pathname === "/plans";
  const contact = location.pathname === "/contact";
  const [opened, setOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <img className={styles.logo} src={Logo} alt="logo" />
        </div>
        {windowWidth >= 1100 && (
          <div className={styles.navbar}>
            <a className={home ? `${styles.selected}` : `${styles.nonSelected}`} onClick={() => handleNavigate("/")}>Inicio</a>
            <a className={services ? `${styles.selected}` : `${styles.nonSelected}`} onClick={() => handleNavigate("/services")}>
              Nuestros Servicios
            </a>
            <a className={plans ? `${styles.selected}` : `${styles.nonSelected}`} onClick={() => handleNavigate("/plans")}>Planes y Precios</a>
            <a className={contact ? `${styles.selected}` : `${styles.nonSelected}`} onClick={() => handleNavigate("/contact")}>Contacto</a>
          </div>
        )}
        {windowWidth < 1100 && (
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
                  <li
                    className={styles.listItem}
                    onClick={() => handleNavigate("/services")}
                  >
                    Nuestros Servicios
                  </li>
                  <li
                    className={styles.listItem}
                    onClick={() => handleNavigate("/plans")}
                  >
                    Planes y Precios
                  </li>
                  <li
                    className={styles.listItem}
                    onClick={() => handleNavigate("/contact")}
                  >
                    Contacto
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </section>
      <section className={styles.infoHeaderContainer}>
        <div className={styles.containerZone}>
          <div>
            <h4 className={styles.titleZone}>WhatsApp Zona 1</h4>
            <div className={styles.cities}>
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
            <div className={styles.cities}>
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
