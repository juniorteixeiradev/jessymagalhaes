import styles from "./Header.module.css";
import handleScroll from "./functions/fixedNavbar";
import { useEffect, useState, useCallback } from "react"
import { Link } from "react-scroll";
import { animated, useSpring } from "@react-spring/web";
import { MdCancelPresentation } from "react-icons/md";


export default function Nav(){
    const [mobile, setMobile] = useState();
    const [display, setDisplay] = useState();
    
    const springs = useSpring({
        from:{
            height:0
        }, 
        to:{
            height:210
        },
        config:{
            duration:100
        },
        reset: true
    })
    function handleClick (sinal){
        console.log("clicou no hamburguer");
    
        if (sinal === "open") {
            setDisplay("flex")
        } else if (sinal === "close") { 
            setDisplay("none") 
        }
    }
    const verificaRes = useCallback(() =>{
        const res = window.innerWidth;

        if(res <= 1000){
            console.log("é menor que 800px")
            setMobile(true);
        } else {
            console.log("é maior que 800px")
            setMobile(false)
        }
        return res;
    },[]);

    
    useEffect(() => {
        verificaRes();
        const addResizeListener = () => {
            window.addEventListener("resize", verificaRes);
        };
        handleScroll();
        addResizeListener();

        return () => {
            window.removeEventListener("resize", verificaRes);
        };
    }, [verificaRes]);
    //Renderização Condicional!
    return(
        <>
        {/** MOBILE */}
        {mobile === true && 
        <>
            <div id="hamburguer" className={styles.navbartrigger} onClick={() => {handleClick("open")}}>☰</div>
            
            <ul style={{display: display}}>
                <animated.div style={springs}>
                <li><Link to="topper" spy={true} smooth={true} href="#" onClick={()=>{handleClick("close")}}>Home</Link></li>
                <li><Link to="sobre" spy={true} smooth={true} href="#sobre" onClick={()=>{handleClick("close")}}>Sobre</Link></li>
                <li><Link to="contato" spy={true} smooth={true} href="#contato" onClick={()=>{handleClick("close")}}>Contato</Link></li>
                <li><Link to="locais" spy={true} smooth={true} href="#locais" onClick={()=>{handleClick("close")}}>Locais de atendimento</Link></li>
                <div style={{display: "flex", justifyContent:"center", cursor:"pointer" }} onClick={()=>{handleClick("close")}}><MdCancelPresentation/></div>
                </animated.div>
            </ul>
        </>
        }
        {/** DESKTOP */}
        {mobile === false &&
            <ul>
                
                <li><Link to="topper" spy={true} smooth={true} href="#">Home</Link></li>
                <li><Link to="sobre" spy={true} smooth={true} href="#sobre">Sobre</Link></li>
                <li><Link to="contato" spy={true} smooth={true} href="#contato">Contato</Link></li>
                <li><Link to="locais" spy={true} smooth={true} href="#locais">Locais de atendimento</Link></li>
            </ul>
        }
        </>
    )
}