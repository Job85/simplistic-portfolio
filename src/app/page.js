import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        Resolving Complex Problems <br />
        Through <span className={styles.bold}>Innovative</span> and <span className={styles.bold}>Efficient</span> Design
      </h1>
      <h2 className={styles.h2}>
        Hi, I'm <span className={styles.bold}>Julian Jernigan</span>, a <span className={styles.bold}>full-stack</span> software engineer with a focus on <span className={styles.bold}>back-end</span> development
      </h2>
    </div>
  )
}
