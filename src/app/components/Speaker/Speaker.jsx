import styles from "./Speaker.module.css";

export const Speaker = () => {

    return (
        <div className={styles.container}>
            <div className={styles.speaker}
                style={{ width: '0.5em' }}
            ></div>
            <div className={styles.speaker}
                style={{ width: '1em' }}
            ></div>
            <div className={styles.speaker}
                style={{ width: '1.5em' }}
            ></div>
            <div className={styles.speaker}
                style={{ width: '1em' }}
            ></div>
            <div className={styles.speaker}
                style={{ width: '0.5em' }}
            ></div>
        </div>
    )
}