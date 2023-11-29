import styles from "./CassetteTape.module.css";

export const CassetteTape = () => {

    return (
        // <div className={styles.container}>
        <div className={styles.cassette}>
            <div className={styles.tape}></div>
            <div className={styles.reels}>
                <div className={`${styles.left} ${styles.reel}`}>
                </div>
                <div className={`${styles.right} ${styles.reel}`}></div>
            </div>
            <div className={styles.window}></div>
        </div>
        // </div>
    )
}