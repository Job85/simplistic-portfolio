import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, name, onClick, style }) => {

    return (
        <button
            className={`${styles.button} ${style}`}
            onClick={onClick}
        >
            {children}
            {name}
        </button>
    )
}

export default Button;