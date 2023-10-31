import styles from "./Locais.module.css";
import { FiMapPin } from 'react-icons/fi';
import { FaComputer } from 'react-icons/fa6'
function Locais (){
    return (
        <>
        <div className={styles.separadorcontainer}>
        <hr/><div className={styles.separador}></div><hr/>
        </div>
        <div id="locais" className={styles.locaiscontainer}>

            <div className={styles.locaisinfo}>
                <h1>Locais de Atendimento:</h1>
                <div className={styles.locaisinfocontainer}>
                    <section>
                        <h2> <FiMapPin /> Atendimento Presencial</h2>
                        <p id="locicon"> Av. 13 de Maio, 1116 - Clinica Sefora Medina.</p>
                    </section>
                    <section>
                        <h2> <FaComputer /> Atendimento Online </h2>
                        <p id="locicon">Diretamente do conforto da sua casa!</p>
                    </section>
                </div>

            </div>


            <div>

            </div>
        </div></>
    );
}

export default Locais;