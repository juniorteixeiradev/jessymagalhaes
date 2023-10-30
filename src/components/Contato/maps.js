import styles from "./Contato.module.css"
function Maps () {
    return(
        <iframe
        title="Mapa" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.279354886089!2d-38.53169842411693!3d-3.749222243280318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74999ba0360cb%3A0x5ad41cfdfcab416!2sCl%C3%ADnica%20S%C3%A9fora%20Medina!5e0!3m2!1spt-BR!2sbr!4v1698434476295!5m2!1spt-BR!2sbr" 
        className={styles.maps}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">

        </iframe>
    );
}
export default Maps;