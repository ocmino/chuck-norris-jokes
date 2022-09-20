//create simple button component

// Language: javascript
// Path: src\Components\UI\Button.js
import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;