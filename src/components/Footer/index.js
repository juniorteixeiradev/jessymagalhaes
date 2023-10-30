import styles from "./Footer.module.css"
function Footer ({children}){
    
    
    return (
        <div id="footer" className={styles.footer}>
            {children}
        </div>
    );
}

export default Footer;