import styles from "./skills.module.css"
import Image from "next/image";

export default function MERN() {
    return (
        <div className={styles.mern}>
            <div className={styles.imgContainer}>
                <Image
                    src={'/mongoDBIcon.png'}
                    fill
                    alt="Mongo DB Icon"
                />
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src={'/expressJSIcon.png'}
                    fill
                    alt="Express JS Icon"
                />
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src={'/reactIcon.png'}
                    fill
                    alt="React Icon"
                />
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src={'/nodeJSIcon.png'}
                    fill
                    alt="Node JS Icon"
                />
            </div>
        </div>
    )
}