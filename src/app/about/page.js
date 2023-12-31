import styles from './page.module.css'
import { MERN, PERN, Languages, Libraries, Frameworks } from '../components/Skills/Skills'
export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.about}>
                <h1 className={styles.h1}>
                    About Me
                </h1>
                <p className={styles.para1}>
                    Hello, I&apos;m Julian Jernigan, and I&apos;ve embarked on a tech-driven quest &#128640; to reshape the digital landscape through imaginative solutions as a full-stack software engineer.
                    My conviction is that a well-crafted back-end forms the very backbone of every exceptional application, while user experience thrives with an appealing front-end.
                </p>
                <p className={styles.para2}>
                    My journey began with a deep dive into the world of software engineering, investing more than 480 hours in an immersive boot camp.
                    Through this intensive experience, I gained a profound understanding of JavaScript and honed my expertise in both the PERN &#40;PostgreSQL, Express, React, Node.js&#41; and MERN &#40;MongoDB, Express, React, Node.js&#41; stacks.
                </p>
            </div>
            <div className={styles.skills}>
                <h2 className={styles.h2}>
                    Skills
                </h2>
                <div className={styles.sub_skills}>
                    <h3 className={styles.h3}>
                        STACK&apos;s
                    </h3>
                    <div className={styles.stack}>
                        <MERN />
                        <PERN />
                    </div>
                </div>
                <div className={styles.sub_skills}>
                    <h3 className={styles.h3}>
                        Languages
                    </h3>
                    <Languages />
                </div>
                <div className={styles.sub_skills}>
                    <h3 className={styles.h3}>
                        Libraries
                    </h3>
                    <Libraries />
                </div>
                <div className={styles.sub_skills}>
                    <h3 className={styles.h3}>
                        Frameworks
                    </h3>
                    <Frameworks />
                </div>
            </div>
        </div>
    )
}