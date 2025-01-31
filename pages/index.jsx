import Image from "next/image";
import Header from "../components/header"
import Logo from "../public/images/logo.svg";
import styles from "./Home.module.scss";
import "../styles/globals.scss";

export default function Home() {
  return (
    <div className={styles.container}>
     <Header></Header>
    </div>
  );
}
