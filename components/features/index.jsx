import Image from "next/image";
import Styles from "./features.module.scss";

const Features = () => {
    return <div className={Styles.container}>
        <h1>Neste bairro, não há agência melhor. Garantimos.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className={Styles.features}>
            <div className={Styles.feature}>
                <Image
                    width={70}
                    height={70}
                    className={Styles.icon}
                    alt="Icon"
                    src="./images/icon.svg">
                </Image>
                <h1>Digital Strategy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
            <div className={Styles.feature}>
                <Image
                    width={70}
                    height={70}
                    className={Styles.icon}
                    alt="Icon"
                    src="./images/icon.svg">
                </Image>
                <h1>Digital Strategy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
            <div className={Styles.feature}>
                <Image
                    width={70}
                    height={70}
                    className={Styles.icon}
                    alt="Icon"
                    src="./images/icon.svg">
                </Image>
                <h1>Digital Strategy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
            <div className={Styles.feature}>
                <Image
                    width={70}
                    height={70}
                    className={Styles.icon}
                    alt="Icon"
                    src="./images/icon.svg">
                </Image>
                <h1>Digital Strategy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
        </div>
    </div>
}

export default Features;