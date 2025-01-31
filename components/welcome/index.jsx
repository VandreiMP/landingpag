import Styles from "./welcome.module.scss";
import Image from "next/image";
import Button from "../button";

const Welcome = () => {
    return <div className={Styles.container}>
        <div className={Styles.text}>
            <h1>Melhor agência de marketing do bairro</h1>
            <p>
                Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.
            </p>
            <Button title={"Aumentar Vendas"} kind={"secundary"}></Button>
        </div>
        <div className={Styles.image}>
        <Image
            width={700}
            height={700}
                alt="Banner Welcome"
                src="./images/leads.svg">
            </Image>
        </div>
    </div>
}

export default Welcome;