'use client'

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button/Button";
import styles from "./Email.module.css";

export const EmailForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
        ).then((result) => {
            console.log(result.text);
            console.log("message sent!")
        }, (error) => {
            console.log(error.text);
            console.log("error sending message, try again!")
        });
    }

    return (
        <form
            className={styles.form}
            ref={form}
            onSubmit={sendEmail}
        >
            <div className={styles.input_text}>
                <input
                    name="user_email"
                    type="email"
                    placeholder="Your Email"
                    required
                />
                <textarea
                    name="user_message"
                    placeholder="Beep..."
                    required
                >
                </textarea>
            </div>
            <Button
                type="submit"
                className={styles.custom_button}
            >
                Leave Message
            </Button>
        </form>
    )
}