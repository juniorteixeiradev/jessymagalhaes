import styles from "./Footer.module.css"
import { FiMapPin } from 'react-icons/fi';
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { BsFillTelephoneOutboundFill, BsWhatsapp, BsEnvelopeAt } from 'react-icons/bs';
import {BiLogoLinkedin} from "react-icons/bi";
function Footer (){
    
    
    return (
        <><div id="footer" className={styles.footer}>
            <section className={styles.sectionimg}>
                <img src="./img/logominwhite.webp" alt="Logo Jéssica"></img>
                <p>Descubra como o autoconhecimento pode transformar sua vida.</p>
            </section>

            <section className={styles.sectioncontact}>
                <h2>CONTATO:</h2>
                <p id="locicon"><FiMapPin /> Av. 13 de Maio, 1116 - Clinica Sefora Medina.</p>
                <p><BsFillTelephoneOutboundFill /> (85) 99738-6828 - Telefone</p>
                <p><BsWhatsapp /> (85) 99738-6828 - Whatsapp</p>
                <p><BsEnvelopeAt /> jessymagalhaespsi@gmail.com</p>
            </section>

            <section className={styles.sectionsocial}>
                <h2>NOSSAS REDES SOCIAIS</h2>
                <ul>
                    <li><a href="https://www.instagram.com/psijessicamagalhaes" target="_blank" rel="noreferrer">
                        <SlSocialInstagram />
                    </a></li>
                    <li><a href="https://www.instagram.com/psijessicamagalhaes" target="_blank" rel="noreferrer"><TiSocialFacebookCircular /></a></li>
                    <li><a href="https://www.linkedin.com/in/jessica-magalh%C3%A3es-tabosa-a25264212/" target="_blank" rel="noreferrer"><BiLogoLinkedin /></a></li>
                </ul>
            </section>

        </div>
        <div className={styles.credits}>
                <p>Todos os Direitos Rerservados &copy; Jessica Magalhães - 2023 - Desenvolvido por <a href="https://linkedin.com/in/junior-teixeiradev" target="_blank" rel="noreferrer">Jun1or Te1xe1ra.</a></p>
            </div>
            </>

    );
}

export default Footer;