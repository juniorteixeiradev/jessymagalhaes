// import React, { lazy, Suspense } from 'react';
import styles from "./ContainerMiddle.module.css";
import Slider from '../Slider';
import Sobre from '../Sobre';
import Sobre2 from '../Sobre2';
import Contato from '../Contato';
import Coments from '../Coments';
import Servicos from '../Servicos';
import Locais from '../Locais';


function ContainerMiddle (){    
    return (
        <div className={styles.containermiddle}>
            <Slider>
            </Slider>
            <Sobre>
                
            </Sobre>
            <Sobre2 />
            <Servicos/>
            <Coments />
            <Locais />
            <Contato />
        </div>
    );
}

export default ContainerMiddle;