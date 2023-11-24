'use client'

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import styles from "./Email.module.css";

export const EmailForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('process.env.EMAIL_JS_SERVICE_ID', 'process.env.EMAIL_JS_Template_ID', form.current, 'process.env.EMAIL_JS_Public_Key')
            .then((result) => {
                console.log(result.text);
                console.log("message sent!")
            }, (error) => {
                console.log(error.text);
                console.log("error sending message, try again!")
            });
    }

    return (
        <form
            ref={form}
            onSubmit={sendEmail}
        >
            <input
                name="user_email"
                type="email"
                placeholder="Email"
                required
            />
            <textarea
                name="user_message"
                placeholder="Write message..."
                required
            >
            </textarea>
            <button
                type="submit"
            >
                Send Message
            </button>
        </form>
    )
}