import Styles from "./contato.module.scss";
import Button from "../button/index";

const Contato = () => {
    return <div className={Styles.container}>
        <div className={Styles.texts}>
            <span>ENTRE EM CONTATO</span>
            <h1>Aumente seu resultado de vendas e performance</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
        </div>
        <div className={Styles.form}>
            <h1>
                Fale com um especialista
            </h1>
            <input type="text"
                placeholder="Nome Completo"
            />
            <input type="email"
                placeholder="E-mail profissional"
            />
            <input type="text"
                placeholder="Celular/Whatsapp"
            />
            <input type="text"
                placeholder="Site"
            />
            <input type="text"
                placeholder="Orçamento para mídia"
            />
            <Button title="Enviar"></Button>
        </div>
    </div>
}

export default Contato;