import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, name, onClick, style }) => {

    return (
        <button
            className={`${styles.button} ${style}`}
            onClick={onClick}
        >
            {name}
            {children}
        </button>
    )
}

export default Button;