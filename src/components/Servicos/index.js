import { especialidades } from "../../contents";
import styles from "./Servicos.module.css";

function Servicos () {
    return (
        <div className={styles.containerservicos}>
            <h1>Nossas especialidades</h1>
            <h2>Atendemos a diversos públicos</h2>
            {
                especialidades.map(item => (
                <div key={item.id} className={styles.servicosbox}>
                    <img src={item.img} />
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