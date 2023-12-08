import styles from "./page.module.css";
import { EmailForm } from "../components/Email/Email";
import { AnsweringMachine } from "../components/AnsweringMachine/AnsweringMachine";
import TypeWriter from "../components/TypeWriter/TypeWriter";

export default function Contact() {

    const text = ["Please leave your email and a brief message after the beep..."]
    return (
        <div className={styles.container} >
            <div className={styles.messanger}>
                <div className={styles.text_bubble}>
                    <TypeWriter
                        texts={text || []}
                    />
                </div>
                <div className={styles.answering_machine}>
                    <AnsweringMachine />
                </div>
            </div>
            <div className={styles.email}>
                <EmailForm />
            </div>
        </div>
    )
}