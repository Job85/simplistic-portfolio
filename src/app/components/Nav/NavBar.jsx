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
                    className={styles.nav_link}
                    href="/projects"
                >
                    Projects
                </Link>
                <Link
                    className={styles.nav_link}
                    href=""
                >
                    GitHub
                </Link>
                <Link
                    className={styles.nav_link}
                    href=""
                >
                    LinkedIn
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar