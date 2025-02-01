import Image from "next/image";
import Header from "../components/header"
import styles from "./Home.module.scss";
import "../styles/globals.scss";
import Welcome from "../components/welcome";
import Feature from "../components/features";
import Contato from "../components/contato";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Welcome></Welcome>
      <Feature></Feature>
      <Contato></Contato>
    </div>
  );
}
