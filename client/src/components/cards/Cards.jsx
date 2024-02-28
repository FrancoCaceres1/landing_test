import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Cards.module.css";

function Cards(props) {
  const navigate = useNavigate();

  Cards.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    edge: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  };

  const handleNavigate = () => {
    navigate("/plans");
  };

  return (
    <section
      style={{
        backgroundColor: props.color,
      }}
      className={styles.cardSection}
    >
      <div className={styles.container}>
        {props.edge && (
          <span className={styles.edgeContainer}>
            <p className={styles.edgeText}>FIBRA</p>
          </span>
        )}
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>
            {props.title1} <br />
            {props.title2}
          </h2>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text}>{props.text}</p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={handleNavigate}>
            MAS INFO
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cards;
