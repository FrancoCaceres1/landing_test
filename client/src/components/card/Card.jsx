import PropTypes from "prop-types";
import { TbArrowsTransferDown } from "react-icons/tb";
import { BsRocket } from "react-icons/bs";
import { FaRegCirclePlay } from "react-icons/fa6";
import styles from "./Card.module.css";

function Card(props) {
  Card.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  };

  return (
    <section className={styles.cardSection}>
      <div
        style={{
          backgroundColor: props.color,
        }}
        className={styles.titleContainer}
      >
        <h2 className={styles.title}>{props.title1}</h2>
        <p className={styles.subtitle}>{props.title2}</p>
      </div>
      <div className={styles.priceContainer}>
        <h1 className={styles.price}>
          <span className={styles.priceSing}>$</span> {props.price}
        </h1>
        <p className={styles.interval}>Mensual</p>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>
            <TbArrowsTransferDown />
            <span>Lorem ipsum dolor fdsf</span>
          </li>
          <span className={styles.line}></span>
          <li>
            <BsRocket />
            <span>Lorem, ipsum dolor</span>
          </li>
          <span className={styles.line}></span>
          <li>
            <FaRegCirclePlay />
            <span>Lorem, ipsum dolorfdsfsdfs</span>
          </li>
        </ul>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.buyButton}>CONTRATAR PLAN</button>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>{props.text}</p>
      </div>
    </section>
  );
}

export default Card;
