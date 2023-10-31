import React, { lazy, Suspense } from 'react';
import styles from "./ContainerMiddle.module.css";

// Importando os componentes de forma lazy
const Slider = lazy(() => import("../Slider"));
const Sobre = lazy(() => import("../Sobre"));
const Contato = lazy(() => import("../Contato"));
const Coments = lazy(() => import("../Coments"));
const Servicos = lazy(() => import("../Servicos"));
function ContainerMiddle (){
    
    return (
        <div className={styles.containermiddle}>
            {/* <div className={styles.banner}>
            </div> */}
            <Suspense fallback={<div className={styles.loader}></div>}>
            <Slider>
            </Slider>
            <Sobre>
            </Sobre>
            <Servicos/>
            <Coments />
            <Contato />
            </Suspense>
        </div>
    );
}

export default ContainerMiddle;