import Slider from "../Slider";
import Sobre from "../Sobre";
import styles from "./ContainerMiddle.module.css";
function ContainerMiddle (){
    
    
    return (
        <div className={styles.containermiddle}>
            {/* <div className={styles.banner}>
            </div> */}

            <Slider>
            </Slider>
            <Sobre>
            </Sobre>
            
        </div>
    );
}

export default ContainerMiddle;