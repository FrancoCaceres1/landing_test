import { RiMailSendLine } from "react-icons/ri";
import styles from "./HiringForm.module.css";

function HiringForm() {
  return (
    <section className={styles.firstSection}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          Trabajá con <br /> nosotros
        </h2>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Si querés formar parte de nuestro equipo administrativo, de ventas o
          de soporte técnico, completá el formulario y adjuntanos tu CV así te
          incorporamos a nuestra base.
        </p>
      </div>
      <form action="submit" className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="" className={styles.label}>
            Nombre y Apellido
          </label>
          <input
            type="text"
            placeholder="Nombre y Apellido"
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="" className={styles.label}>
            Correo electrónico
          </label>
          <input
            type="email"
            placeholder="Correo electrónico"
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="" className={styles.label}>
            Teléfono
          </label>
          <input
            type="phoneNumber"
            placeholder="Teléfono"
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="" className={styles.label}>
            Sube Aquí Tu CV
          </label>
          <button className={styles.cvButton}>Seleccionar archivo</button>
        </div>
        <div className={styles.inputContainer}>
          <button className={styles.sendButton}>
            <span>
              <RiMailSendLine />
            </span>
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
}

export default HiringForm;
