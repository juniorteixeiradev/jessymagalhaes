import styles from "./Header.module.css";
import { LiaMapMarkerAltSolid } from 'react-icons/lia';
import { BsFillTelephoneOutboundFill, BsWhatsapp } from 'react-icons/bs';
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebookCircular, TiSocialYoutube } from "react-icons/ti";
import { Link } from 'react-scroll';

import useResponsiveDisplay from "./functions/useResponsiveDisplay";
function Header ({children}){
//Chamando dentro do componente porque tem Hooks do react na função
const { display, handleClick} = useResponsiveDisplay();
//Forma desconstruida do objeto

    return (
        <><div id="topper" className={styles.topper}>
            <div className={styles.loc}>
                <LiaMapMarkerAltSolid /> Av. 13 de Maio, 1116 - Clinica Sefora Madina.
            </div>
            <div className={styles.contact}>
                <BsFillTelephoneOutboundFill /> (85) 99738-6828
                <BsWhatsapp /> (85) 99738-6828
            </div>
            <ul>
                <li><a href="https://www.instagram.com/psijessicamagalhaes" target="_blank" rel="noreferrer">
                    <SlSocialInstagram />
                </a></li>
                <li><a href="https://www.instagram.com/psijessicamagalhaes" target="_blank" rel="noreferrer"><TiSocialFacebookCircular /></a></li>
                <li><a href="https://www.instagram.com/psijessicamagalhaes" target="_blank" rel="noreferrer"><TiSocialYoutube /></a></li>
            </ul>
        </div>
        
        <header className={styles.headercontainer}>
                {children}




                <nav className={styles.navbar}>
                    <div className={styles.logo}>
                        <img src="./img/logomin.webp" alt="Logo Jessica Magalhães"></img>
                    </div>
                    <div id="hamburguer" className={styles.navbartrigger} onClick={() => {handleClick()}}>☰</div>
                    <ul style={{display: display}}>
                        <li><Link to="topper" spy={true} smooth={true} href="#">Home</Link></li>
                        <li><Link to="sobre" spy={true} smooth={true} href="#sobre">Sobre</Link></li>
                        <li><Link to="contato" spy={true} smooth={true} href="#contato">Contato</Link></li>
                        <li><Link to="locais" spy={true} smooth={true} href="#locais">Locais de atendimento</Link></li>
                    </ul>
                    <button className={styles.btn}><a href="https://wa.me/5585997386828?text=Olá%20Gostaria%20de%20saber%20sobre%20marcação%20de%20consulta!" target="_blank" rel="noreferrer">Agendar Consulta</a> </button>
                </nav>



            </header></>
    );
}

export default Header;