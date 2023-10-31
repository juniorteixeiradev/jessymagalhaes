import styles from "./Coments.module.css"
function Stars ({size}){
    if(size === "big"){
        return (
            <div className={styles.ratingbig}>
            <label for="star5"></label>
            <label for="star4"></label>
            <label for="star3"></label>
            <label for="star2"></label>
            <label for="star1"></label>
        </div>
        )
    } else if(size === "small"){
    return (
        <div className={styles.rating}>
        <label for="star5"></label>
        <label for="star4"></label>
        <label for="star3"></label>
        <label for="star2"></label>
        <label for="star1"></label>
    </div>
    )
    }
}

export default Stars;