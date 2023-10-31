import React, { lazy, Suspense } from 'react';
import styles from "./ContainerMiddle.module.css";

// Importando os componentes de forma lazy
const Slider = lazy(() => import("../Slider"));
const Sobre = lazy(() => import("../Sobre"));
const Contato = lazy(() => import("../Contato"));
const Coments = lazy(() => import("../Coments"));
const Servicos = lazy(() => import("../Servicos"));
const Locais = lazy(() => import("../Locais"));
function ContainerMiddle (){
    
    return (
        <div className={styles.containermiddle}>
            {/* <div className={styles.banner}>
            </div> */}
            <Suspense fallback={<div className={styles.loader}></div>}>
                <Slider>
                </Slider>
            </Suspense>
            <Suspense fallback={<div className={styles.loader}></div>}>
                <Sobre>
                </Sobre>
            </Suspense>
            <Suspense fallback={<div className={styles.loader}></div>}>
                <Servicos/>
            </Suspense>
            <Suspense fallback={<div className={styles.loader}></div>}>
                <Coments />
                </Suspense>
            <Suspense fallback={<div className={styles.loader}></div>}>
                <Locais />
                <Contato />
            </Suspense>
            
            
        </div>
    );
}

export default ContainerMiddle;