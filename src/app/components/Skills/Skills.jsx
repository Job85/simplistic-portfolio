import styles from "./skills.module.css"
import Image from "next/image";

export function MERN() {
    return (
        <div className={styles.skills_container}>
            <div className={styles.img_container}>
                <Image
                    src={'/mongoDBIcon.png'}
                    fill
                    alt="Mongo DB Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/expressJSIcon.png'}
                    fill
                    alt="Express JS Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/reactIcon.png'}
                    fill
                    alt="React Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/nodeJSIcon.png'}
                    fill
                    alt="Node JS Icon"
                />
            </div>
        </div>
    )
}

export function PERN() {
    return (
        <div className={styles.skills_container}>
            <div className={styles.img_container}>
                <Image
                    src={'/postgreSQLIcon.png'}
                    fill
                    alt="Postgres SQL Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/expressJSIcon.png'}
                    fill
                    alt="Express JS Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/reactIcon.png'}
                    fill
                    alt="React Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/nodeJSIcon.png'}
                    fill
                    alt="Node JS Icon"
                />
            </div>
        </div>
    )
}

export function Languages() {
    return (
        <div className={styles.skills_container}>
            <div className={styles.img_container}>
                <Image
                    src={'/javascriptIcon.png'}
                    fill
                    alt="JavaScript Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/pythonIcon.png'}
                    fill
                    alt="Python Icon"
                />
            </div>
        </div>
    )
}

export function Libraries() {
    return (
        <div className={styles.skills_container}>
            <div className={styles.img_container}>
                <Image
                    src={'/mongooseIcon.png'}
                    fill
                    alt="Mongoose Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/sequelizeIcon.png'}
                    fill
                    alt="Sequelize Icon"
                />
            </div>
        </div>
    )
}

export function Frameworks() {
    return (
        <div className={styles.skills_container}>
            <div className={styles.img_container}>
                <Image
                    src={'/bootstrapIcon.png'}
                    fill
                    alt="Bootstrap Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/sassIcon.png'}
                    fill
                    alt="Sass Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/djangoIcon.png'}
                    fill
                    alt="Django Icon"
                />
            </div>
        </div>
    )
}