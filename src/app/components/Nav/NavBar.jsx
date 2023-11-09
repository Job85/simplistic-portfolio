'use client'

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Nav.module.css";

const NavBar = () => {

    const pathname = usePathname();

    return (
        <nav className={styles.nav_container}>
            <ul className={styles.nav_links}>
                <Link
                    className={`${styles.nav_link} ${pathname === '/' ? styles.active_link : ''}`}
                    href="/"
                >
                    Home
                </Link>
                <Link
                    className={`${styles.nav_link} ${pathname === '/about' ? styles.active_link : ''}`}
                    href="/about"
                >
                    About
                </Link>
                <Link
                    className={`${styles.nav_link} ${pathname === '/projects' ? styles.active_link : ''}`}
                    href="/projects"
                >
                    Projects
                </Link>
                <a
                    className={styles.nav_link}
                    href="https://github.com/Job85"
                    target="_blank"
                >
                    GitHub
                </a>
                <a
                    className={styles.nav_link}
                    href="https://www.linkedin.com/in/julian-jernigan813/"
                    target="_blank"
                >
                    LinkedIn
                </a>
            </ul>
        </nav>
    )
}

export default NavBar