import styles from "./skills.module.css"
import Image from "next/image";

export function MERN() {
    return (
        <div className={styles.skills_container}>
            <div className={styles.img_container}>
                <Image
                    src={'/mongoDBIcon.png'}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    priority={true}
                    alt="Mongo DB Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/expressJSIcon.png'}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    alt="Express JS Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/reactIcon.png'}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    alt="React Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/nodeJSIcon.png'}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
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
                    sizes="(max-width: 640px) 100vw, 400px"
                    alt="Postgres SQL Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/expressJSIcon.png'}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    alt="Express JS Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/reactIcon.png'}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    alt="React Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/nodeJSIcon.png'}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
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
                    sizes="(max-width: 640px) 100vw, 400px"
                    alt="JavaScript Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/pythonIcon.png'}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
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
                    sizes="(max-width: 640px) 100vw, 400px"
                    alt="Mongoose Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/sequelizeIcon.png'}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
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
                    sizes="(max-width: 640px) 100vw, 400px"
                    alt="Bootstrap Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/sassIcon.png'}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    alt="Sass Icon"
                />
            </div>
            <div className={styles.img_container}>
                <Image
                    src={'/djangoIcon.png'}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    alt="Django Icon"
                />
            </div>
        </div>
    )
}