import styles from "./Card.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Card = () => {
  const variantObj = {
    initial: {
      opacity: 0,
      x: "85vw",
    },
    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 1.2,
      },
    },
  };

  const controls = useAnimation();
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("initial");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={variantObj}
      initial="initial"
      className={styles.card}
    ></motion.div>
  );
};

export default Card;
