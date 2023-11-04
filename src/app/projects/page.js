import ProjectCards from "../components/ProjectCards/ProjectCards"
import styles from "./page.module.css"

export default function Projects() {
    return (
        <div className={styles.container}>
            <h1 className={styles.page_header}>
                My Projects
            </h1>
            <div className={styles.project_container}>
                <ProjectCards />
            </div>
        </div>
    )
}