import styles from "./page.module.css";
import { EmailForm } from "../components/Email/Email";
import { AnsweringMachine } from "../components/AnsweringMachine/AnsweringMachine";

export default function Contact() {

    return (
        <div>
            <div>
                <AnsweringMachine />
            </div>
            <EmailForm />
        </div>
    )
}