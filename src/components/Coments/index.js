import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';
import { commentsbox } from "../../contents";
import {  useEffect, useState } from "react";

import styles from "./Coments.module.css";
import Stars from "./stars";


function Coments (){
    const [display, setDisplay] = useState(1);

    const atualizarDisplay = () => {
    if (window.innerWidth < 800) {
        setDisplay(1); 
    } else {
        setDisplay(3); 
    }
    };

    useEffect(() => {
        atualizarDisplay();
        window.addEventListener('resize', atualizarDisplay);

    // Remove o ouvinte quando o componente for desmontado
        return () => {
        window.removeEventListener('resize', atualizarDisplay);
    };
    }, []);


    return(
        <div className={styles.containercoments}>
            <h1>Depoimentos:</h1>
            <h2>Veja o que nossos clientes estão falando!</h2>
            
            <Stars size="big"></Stars>
            <h2 style={{color: "#000"}}>Excelente!</h2>
            <span>Com base em mais de <b>150</b> avaliações</span>
            <span>Veja alguns comentarios abaixo:</span>
            <div className={styles.containercomentsbox}>
            <Swiper
            style={{height: '400px'}}
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            slidesPerView={display}
            navigation
            > 
            {
                
            commentsbox.map((item) =>(
                <SwiperSlide key={item.id}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div key={item.id} className={styles.comentsbox}>
                <div className={styles.comentsboxnome}>
                    <img src={item.img}></img>
                    <span>{item.nome}</span>
                </div>
                <Stars size="small"></Stars>
                <div className={styles.comentsboxcontent}>
                <h3>{item.comentario}</h3>
                </div>
                
                </div>
                </SwiperSlide>

            ))
            
            }
            </Swiper>
            </div>
            
        </div>
    );
}
export default Coments;