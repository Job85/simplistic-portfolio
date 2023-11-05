import React from "react";
import styles from "./Button.module.css";

const Button = ({ name, onClick, style }) => {

    return (
        <button
            className={`${styles.button} ${style}`}
            onClick={onClick}
        >
            {name}
        </button>
    )
}

export default Button;