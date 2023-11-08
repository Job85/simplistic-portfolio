import localFont from 'next/font/local';
import ProjectCards from "../components/ProjectCards/ProjectCards"
import styles from "./page.module.css"

const myFont = localFont({ src: '../fonts/neontubes2.otf' });

export default function Projects() {
    return (
        <div className={styles.container}>
            <h1 className={`${styles.page_header} ${myFont.className}`}>
                My Projects
            </h1>
            <div className={styles.project_container}>
                <ProjectCards />
            </div>
        </div>
    )
}