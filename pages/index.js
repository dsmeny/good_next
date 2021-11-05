import Head from "next/head";
import Home from "./home";
import styles from "../styles/Home.module.css";

export default function Index() {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
}
