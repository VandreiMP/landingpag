import Image from "next/image";
import Link from "next/link";
import Styles from "./header.module.scss"

const Header = () => {
    return <div className={Styles.container}>
        <div className={Styles.logotipo}>
            <Image
                alt="logo agencia"
                width={150}
                height={150}
                src="./images/logo.svg" />
        </div>
        <div className={Styles.menu}>
            <Link href="/">
                Home
            </Link>
            <Link href="/"> 
                O que fazemos
            </Link>
            <Link href="/">
                Cases
            </Link>
        </div>
        <div className={Styles.action}>
            <button className={Styles.button}>Fale Conosco</button>
        </div>
    </div>
}

export default Header;