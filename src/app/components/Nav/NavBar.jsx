'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

const NavBar = () => {
    const pathname = usePathname();

    return (
        <nav className={styles.navBar}>
            <ul className={styles.navLinks}>
                <Link
                    className={styles.navLink}
                    href="/"
                >
                    Home
                </Link>
                <Link
                    className={styles.navLink}
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