import styles from "./Header.module.css";
import { LiaMapMarkerAltSolid } from 'react-icons/lia';
import { BsFillTelephoneOutboundFill, BsWhatsapp } from 'react-icons/bs';
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebookCircular, TiSocialYoutube } from "react-icons/ti";
import { useCallback, useEffect, useState } from "react";
import handleScroll from "./fixedNavbar.js";
import { Link, animateScroll as scroll } from 'react-scroll';
function Header ({children}){
    const [display, setDisplay] = useState();
    const [displaystatus, setDisplayStatus] = useState(false);
    
    const handleResize = useCallback (() =>{
        if (window.innerWidth <= 800){
            setDisplay("none")
        } else {
            setDisplay("flex")
        }
    }, []);

    const handleclick = useCallback(() => {
        if (displaystatus) {
        setDisplay("none");
        } else {
        setDisplay("flex");
        }
    setDisplayStatus(!displaystatus); // Inverte o valor de displaystatus
}, [displaystatus]);

    function verResize () {
        window.addEventListener('resize', handleResize);
    }
    
useEffect(() => {
        handleScroll();
        verResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
}, [handleResize]);


    return (
        <><div id="topper" className={styles.topper}>
            <div className={styles.loc}>
                <LiaMapMarkerAltSolid /> Av. 13 de Maio, 1116 - Clinica Sefora Madina.
            </div>
            <div className={styles.contact}>
                <BsFillTelephoneOutboundFill /> (88) 99738-6828
                <BsWhatsapp /> (88) 99738-6828
            </div>
            <ul>
                <li><a href="https://www.instagram.com/psijessicamagalhaes" target="_blank" rel="noreferrer">
                    <SlSocialInstagram />
                </a></li>
                <li><a href="#"><TiSocialFacebookCircular /></a></li>
                <li><a href="#"><TiSocialYoutube /></a></li>
            </ul>
        </div>
        
        <header className={styles.headercontainer}>
                {children}




                <nav className={styles.navbar}>
                    <div className={styles.logo}>
                        <img src="./img/logomin.webp" alt="Logo Jessica Magalhães"></img>
                    </div>
                    <div id="hamburguer" className={styles.navbartrigger} onClick={() => {handleclick()}}>☰</div>
                    <ul style={{display: display}}>
                        <li><Link to="topper" spy={true} smooth={true} >Home</Link></li>
                        <li><Link to="sobre" spy={true} smooth={true} >Sobre</Link></li>
                        <li><Link to="contato" spy={true} smooth={true} >Contato</Link></li>
                        <li><Link to="locais" spy={true} smooth={true} >Locais de atendimento</Link></li>
                    </ul>
                    <button className={styles.btn}>Agendar Consulta </button>
                </nav>



            </header></>
    );
}

export default Header;