import React from "react";
import axios from "axios";
import Button from "../Components/UI/Button";
import styles from "./Chuck.module.css";

function Chuck() {
  const [joke, setJoke] = React.useState("");

  const getJoke = () => {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => {
        setJoke(response.data.value);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className={styles.title}>Chuck Norris Jokes</h1>
      <Button onClick={getJoke}>Get joke</Button>
      <Button onClick={() => setJoke("")}>Clear joke</Button>
      <p className={styles.joke}>{joke}</p>
    </div>
  );
}

export default Chuck;