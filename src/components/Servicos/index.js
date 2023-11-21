import { especialidades } from "../../contents";
import styles from "./Servicos.module.css";
import useScrollReveal from "../../core/useScrollReveal";

function Servicos () {
    const { useReveal } = useScrollReveal();
    useReveal("#containerservicos");
    return (
        <div className={styles.containerservicos} id="containerservicos">
            <h1>Nossas especialidades</h1>
            <h2>Atendemos a diversos públicos!</h2>
            {
                especialidades.map(item => (
                <div key={item.id} className={styles.servicosbox}>
                    <img src={item.img} alt={item.nome}/>
                    <div className={styles.servicosboxdesc}>
                    <h2>{item.nome}</h2>
                    <span>{item.description}</span>
                    </div>
                </div>
                ))

            }
        </div>
    );
}

export default Servicos;