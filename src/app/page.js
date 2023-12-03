'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Button from './components/Button/Button';
import TypeWriter from './components/TypeWriter/TypeWriter';

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const router = useRouter();

  const textArray = ["Heeey yooouu guys!", "Get in touch!"]
  const text2 = ["Where we're going. We don't need roads."]

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };


  const handleClick = () => {
    router.push('/contact')
  };

  return (
    <div>
      {!animationComplete && (

        <div className={styles.opening}>
          <TypeWriter
            texts={text2}
            onAnimationComplete={handleAnimationComplete}
            onCompleteDelay={1000}
          />
        </div>
      )}

      {animationComplete && (
        <>
          <div className={styles.container}>
            <h1 className={styles.h1}>
              Resolving Complex Problems <br />
              Through <span className={styles.bold}>Innovative</span> and <span className={styles.bold}>Efficient</span> Design
            </h1>
            <h2 className={styles.h2}>
              Hi, I'm <span className={styles.bold}>Julian Jernigan</span>, a <span className={styles.bold}>full-stack</span> software engineer with a focus on <span className={styles.bold}>back-end</span> development
            </h2>
          </div>
          <div>

          </div>
          <Button
            style={styles.custom_button}
            onClick={handleClick}
          >
            <TypeWriter
              texts={textArray}
            />

          </Button>
        </>
      )}
    </div>
  )
}
