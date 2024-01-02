'use client'

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import Button from './components/Button/Button';
import TypeWriter from './components/TypeWriter/TypeWriter';
import localFont from 'next/font/local';

const myFont = localFont({ src: './fonts/BTTF.ttf' });
const gooniesFont = localFont({ src: './fonts/Goonies.ttf' });

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [pageTransition, setPageTransition] = useState(false);
  const router = useRouter();

  const textArray = ["Get in touch!"]
  const text2 = ["Where we're going. We don't need roads <"]

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };


  const handleClick = () => {
    router.push('/contact')
  };

  useEffect(() => {
    // Check if 'visited' is not set and seet it
    const visited = sessionStorage.getItem('visited');
    console.log('Visited:', visited);
    if (!visited) {
      sessionStorage.setItem('visited', 'true');
    }

    // If 'visited' is set to 'true', set animationComplete and pageTransition
    if (visited === 'true') {
      setAnimationComplete(true);
      setPageTransition(true);
    }
  }, []);

  useEffect(() => {
    if (animationComplete) {
      console.log('Animation complete. Setting page transition after 1500m.')
      setTimeout(() => {
        setPageTransition(true);
      }, 1500)
    }
  }, [animationComplete]);

  return (
    <div>
      {!animationComplete && (
        <div className={styles.opening}>
          <TypeWriter
            texts={text2}
            onAnimationComplete={handleAnimationComplete}
            onCompleteDelay={1000}
            style={styles.custom_text}
            fontClassNames={[myFont.className]}
          />
        </div>
      )}

      {animationComplete && (
        <>
          <div className={`${styles.page_container} ${pageTransition && styles['page_transition']}`}>
            <div className={styles.container}>
              <h1 className={styles.h1}>
                Resolving Complex Problems <br />
                Through <span className={styles.bold}>Innovative</span> and <span className={styles.bold}>Efficient</span> Design
              </h1>
              <h2 className={styles.h2}>
                Hi, I&apos;m <span className={styles.bold}>Julian Jernigan</span>, a <span className={styles.bold}>full-stack</span> software engineer with a focus on <span className={styles.bold}>back-end</span> development
              </h2>
            </div>
            {pageTransition && (
              <Button
                style={styles.custom_button}
                onClick={handleClick}
              >
                <TypeWriter
                  texts={textArray}
                  onCompleteDelay={10000}
                  delayAfterComplete={3000}
                />

              </Button>
            )}
          </div>
        </>
      )}
    </div>
  )
}
