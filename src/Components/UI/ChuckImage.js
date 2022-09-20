
import React from "react";
import styles from "./ChuckImage.module.css";

const ChuckImage = () => {
  return (
    <div className={styles.image}>
      <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" />
    </div>
  );
};

export default ChuckImage;