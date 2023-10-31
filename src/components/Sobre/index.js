import styles from "./Sobre.module.css";
import button from "../Header/Header.module.css";
import { boxcontents } from "../../contents";

function Sobre (){
    return (
        <div className={styles.containersobre}>
            <div className={styles.sobremim}>
            <div className={styles.sobreimg}>
                <img  id="sobre" src="/img/jessy.webp" alt="Jessica Magalhães"/>
            </div>
            <div  className={styles.textsobre}>
                <h2>Olá, eu sou </h2>
                <h1>Jessica Magalhães</h1>
                <p>Jessica Magalhães Tabosa, psicóloga formada pela Universidade de Fortaleza (unifor), Membro do PRAVIDA, 
                    minha paixão pela psicologia é evidente em cada consulta. 
                    Com experiência em Psicologia Hospitalar, Psicologia Escolar, Psicologia Jurídica e Psicologia Clínica, atuo utilizando o método Gestalt, 
                    que valoriza a integração holística da experiência humana.</p>

                    <p>Você merece atenção especializada e personalizada, e é exatamente isso que eu crio,
                    Imagine uma jornada de autoconhecimento e bem-estar, 
                    guiada pelo poder transformador do método Gestalt. 
                    Trabalhando com crianças, adolescentes, adultos e idosos, meu desejo é ser sua parceira nesse processo, 
                    auxiliando-o a superar desafios e a alcançar um estado de equilíbrio emocional. 
                    </p>
                    <p>Não espere para investir em seu bem-estar mental! 
                    Marque sua consulta comigo e embarque em uma jornada de autodescoberta e crescimento,
                    Sua saúde mental é uma prioridade, e estou aqui para oferecer o suporte necessário. 
                    Agende sua consulta e inicie a transformação!
                    </p>
                    <button className={button.btn}><a href="https://wa.me/5585997386828?text=Olá%20Gostaria%20de%20saber%20sobre%20marcação%20de%20consulta!" target="_blank" rel="noreferrer">Agendar Consulta </a></button>
                    
                
            </div>
            </div>
            
            <div className={styles.boxsobrecontainer}>
                        <div className={styles.boxsobrecontent}>
                            <h1> Porque ter acompanhamento Psicológico? 
                            </h1>
                <div className={styles.boxsobreitemcontainer}>
            {
                boxcontents.map(item => (
                    
                            <div key={item.id} className={styles.boxsobreitem}>
                                <img src={item.icon} width="70" height="70" alt={item.boxsobreitemtitle} />
                                <div className={styles.boxsobreitemtitle}>
                                    <h2>{item.title}</h2>
                                </div>
                                
                                <p>{item.description}</p>
                            </div>
                    
                ))
            }
                </div>
                    </div>
            </div>
            

        </div>

    );
}

export default Sobre;