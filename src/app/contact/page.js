import styles from "./page.module.css";
import { EmailForm } from "../components/Email/Email";
import { AnsweringMachine } from "../components/AnsweringMachine/AnsweringMachine";
import TypeWriter from "../components/TypeWriter/TypeWriter";

export default function Contact() {

    const text = ["Please leave a message after the beep..."]
    return (
        <div>
            <div className={styles.message}>
                <div className={styles.text_bubble}>
                    <TypeWriter
                        texts={text}
                    />
                </div>
                <div className={styles.answering_machine}>
                    <AnsweringMachine />
                </div>
            </div>
            <EmailForm />
        </div>
    )
}