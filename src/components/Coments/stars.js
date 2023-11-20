import styles from "./Coments.module.css"
export default function Stars (props){
    if(props.size === "big"){
        return (
            <div className={styles.ratingbig}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        )
    } else if(props.size === "small"){
    return (
        <div className={styles.rating}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div ></div>
    </div>
    )
    }
}
