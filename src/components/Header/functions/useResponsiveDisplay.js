import { useEffect, useState, useCallback } from "react";

import handleScroll from "./fixedNavbar";
//Função da navbar fixa ao rolar

function useResponsiveDisplay() {
    const [display, setDisplay] = useState();
    const [displayStatus, setDisplayStatus] = useState(false);
    //variaveis de estado

    const handleResize = useCallback(() => {
        if (window.innerWidth <= 800) {
        setDisplay("none");
        } else {
        setDisplay("flex");
        }
    }, []);

    //função que ve que a tela está menor que 800px pra que o navbar hamburguer apareça e a navbar normal suma

    const handleClick = useCallback(() => {
        setDisplay("none")
        if (displayStatus) {
        setDisplay("none");
        } else {
        setDisplay("flex");
        }
        setDisplayStatus(!displayStatus);
    }, [displayStatus]);

    //Função que muda o display da navbar que agora esta escondida quando clica no hamburguer

    // const addResizeListener = () => {
    //     window.addEventListener("resize", handleResize);
    // };

    //Muda o display quando houver o evento resize novamente na tela

    useEffect(() => {
        const addResizeListener = () => {
            window.addEventListener("resize", handleResize);
        };
        handleScroll();
        addResizeListener();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);
    
    //Retorno um objeto com as funções e variaveis que serao usadas
    return {
        display,
        displayStatus,
        handleResize,
        handleClick,
    };
}

export default useResponsiveDisplay;
