import styles from "./Contato.module.css";
import Maps from "./maps";
import { FiMapPin } from 'react-icons/fi';
import { BsFillTelephoneOutboundFill, BsWhatsapp, BsEnvelopeAt } from 'react-icons/bs';
function Contato (){
    return (
        <div className={styles.locaiscontainer} id="contato">
            <div className={styles.locaisinfo}>
                <h1>Fale conosco:</h1>
                <h2>Atendimento rápido pelos nossos canais de comunicação.</h2>
                <p id="locicon"><FiMapPin /> Av. 13 de Maio, 1116 - Clinica Sefora Medina.</p>
                
            
                <p><BsFillTelephoneOutboundFill /> (85) 99738-6828 - Telefone</p>
                <p><BsWhatsapp /> (85) 99738-6828 - Whatsapp</p>
                <p><BsEnvelopeAt/> jessymagalhaespsi@gmail.com</p>
                <button className={styles.btn}><BsWhatsapp /> <a href="https://wa.me/5585997386828?text=Olá%20Gostaria%20de%20saber%20sobre%20marcação%20de%20consulta!" target="_blank" rel="noreferrer">Fale conosco</a> </button>
            </div>
            
            <div>
                <Maps />
            </div>
        </div>
    );
}

export default Contato;