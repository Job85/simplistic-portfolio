import styles from "./AnsweringMachine.module.css";
import { Speaker } from "../Speaker/Speaker";
import { CassetteTape } from "../CassetteTape/CaseetteTape";

export const AnsweringMachine = () => {

    return (
        <div className={styles.machine}>
            <div className={styles.panel1}>
                <Speaker />
                <div className={styles.window}>
                    <CassetteTape />
                    <CassetteTape />
                </div>
            </div>
            <div className={styles.panel2}>
                <div className={`${styles.dial} ${styles.knob1}`}>
                    <div className={styles.dial_knob}></div>
                </div>
                <div className={`${styles.dial} ${styles.knob2}`}>
                    <div className={`${styles.dial_knob}`}></div>
                </div>
                <div className={styles.button_group}>
                    <button className={styles.button}>RWD</button>
                    <button className={styles.button}>PLAY</button>
                    <button className={styles.button}>FWD</button>
                </div>
            </div>
        </div>
    )
}