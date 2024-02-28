import ContactForm from "../../components/contactForm/ContactForm";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Contáctanos</h1>
        </div>
      </div>
      <div className={styles.formContainer}>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
