import ProjectCards from "../components/ProjectCards/ProjectCards"
import styles from "./page.module.css"

export default function Projects() {
    return (
        <div className={styles.container}>
            <h1>My Projects</h1>
            <div>
                <ProjectCards />
            </div>
        </div>
    )
}