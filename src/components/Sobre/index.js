import styles from "./Sobre.module.css";
import button from "../Header/Header.module.css";

function Sobre (){
    return (
        <div id="sobre" className={styles.containersobre}>
            <div className={styles.sobreimg}>
                <img src="/img/jessy.webp" alt="Jessica Magalhães"/>
            </div>
            <div className={styles.textsobre}>
                <h2>Olá, eu sou </h2>
                <h1>Jessica Magalhães</h1>
                <p>Jessica Magalhães Tabosa, psicóloga formada pela Universidade de Fortaleza (unifor), Membro do PRAVIDA, 
                    minha paixão pela psicologia é evidente em cada consulta. 
                    Com experiência em Psicologia Hospitalar, Psicologia Escolar, Psicologia Jurídica e Psicologia Clínica, atuo utilizando o método Gestalt, 
                    que valoriza a integração holística da experiência humana.

                    <p>Você merece atenção especializada e personalizada, e é exatamente isso que eu crio,
                    Imagine uma jornada de autoconhecimento e bem-estar, 
                    guiada pelo poder transformador do método Gestalt. 
                    Trabalhando com crianças, adolescentes, adultos e idosos, meu desejo é ser sua parceira nesse processo, 
                    auxiliando-o a superar desafios e a alcançar um estado de equilíbrio emocional. 
                    </p>
                    Não espere para investir em seu bem-estar mental! 
                    Marque sua consulta comigo e embarque em uma jornada de autodescoberta e crescimento,
                    Sua saúde mental é uma prioridade, e estou aqui para oferecer o suporte necessário. 
                    Agende sua consulta e inicie a transformação!
                    <p>
                    <button className={button.btn}>Agendar Consulta </button>
                    </p>
                </p>
            </div>
        </div>

    );
}

export default Sobre;