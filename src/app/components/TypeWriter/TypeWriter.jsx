'use client'

import React, { useState, useEffect } from "react";
import { Press_Start_2P } from 'next/font/google';
import styles from "./TypeWriter.module.css";


const press_start_2P = Press_Start_2P({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap'
})


const TypeWriter = ({ texts }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    let speed = 50;

    useEffect(() => {
        if (currentTextIndex < texts.length) {
            const intervalId = setInterval(() => {
                if (currentText.length < texts[currentTextIndex].length) {
                    setCurrentText((prevText) => prevText + texts[currentTextIndex].charAt(currentText.length));
                } else {
                    clearInterval(intervalId);
                    if (currentTextIndex < texts.length - 1) {
                        setTimeout(() => {
                            setCurrentTextIndex((index) => index + 1);
                            setCurrentText('');
                        }, 1000);
                    }
                }
            }, speed);

            return () => clearInterval(intervalId);
        }
    }, [texts, currentText, currentTextIndex]);

    return (
        <p className={`${styles.text} ${press_start_2P.className}`}>
            {currentText}
        </p>
    )
}

export default TypeWriter;