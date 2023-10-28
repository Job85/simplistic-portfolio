'use client'

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Nav.module.css";

const NavBar = () => {

    const pathname = usePathname();

    return (
        <nav className={styles.navBar}>
            <ul className={styles.navLinks}>
                <Link
                    className={`${styles.navLink} ${pathname === '/' ? styles.activeLink : ''}`}
                    href="/"
                >
                    Home
                </Link>
                <Link
                    className={`${styles.navLink} ${pathname === '/about' ? styles.activeLink : ''}`}
                    href="/about"
                >
                    About
                </Link>
                <Link
                    className={styles.navLink}
                    href="/projects"
                >
                    Projects
                </Link>
                <Link
                    className={styles.navLink}
                    href=""
                >
                    GitHub
                </Link>
                <Link
                    className={styles.navLink}
                    href=""
                >
                    LinkedIn
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar