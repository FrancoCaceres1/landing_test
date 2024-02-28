import { RiMailSendLine } from "react-icons/ri";
import styles from "./ContactForm.module.css";

function ContactForm() {
  return (
    <section className={styles.firstSection}>
      <form className={styles.form}>
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
            Asunto
          </label>
          <textarea
            type="text"
            placeholder="Deje su consulta aqui..."
            className={styles.input}
          />
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

export default ContactForm;
